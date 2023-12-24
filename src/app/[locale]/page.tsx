"use client";
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import AsanKobilButton from "@/components/Layout/AsanKobilButton";
import AsanKobilLink from "@/components/Layout/asanKobilLink";
import { useTranslations } from "next-intl";
import Pending from "./Pending";
import AsanImzaForm from "@/components/Layout/(asanImzaComponents)/asanImzaForm";

export default function Home() {
  const [sid, setSid] = useState(null);
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [verifCode, setVerifCode] = useState(null);
  const [phone, setPhone] = useState("");
  const [asanId, setAsanId] = useState("");
  const t = useTranslations() || "";

  const onClose = () => {
    setIsErr(false);
  };
  const isButtonDisabled = !(phone.length === 12 && asanId.length === 6);

  const handleSubmit = async () => {
    let phoneNumber = phone.split(' ').join('');
    console.log(phoneNumber);
    
    const requestData = {
      phoneNumber: `+994${phoneNumber}`,
      asanId: asanId,
    };
    try {
      const response = await fetch(
        "https://mock-api-login-abb.vercel.app/auth/v1/auth/login/asanimza",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setisLoading(true);
      setSid(responseData.sid);
      setVerifCode(responseData.verificationCode);
    } catch (error) {
      console.error("Error making the request:", error);
      setIsErr(true);
    }
  };
  if (isLoading) {
    return <Pending sid={sid} verifCode={verifCode} />;
  } else {
    return (
      <Layout>
        <VStack
          w="100%"
          align="flex-start"
          gap="24px"
          marginY="0"
          marginX="auto"
          maxWidth="480px"
        >
          <AsanKobilLink />
          {isErr && (
            <Alert status="error" borderRadius="5px">
              <AlertIcon />
              <AlertDescription>{t("login.errors.2004")}</AlertDescription>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
              />
            </Alert>
          )}
          <Box display="flex" flexDirection="column" gap="18px" width="100%">
            <VStack gap="8px" w="100%">
              <AsanImzaForm setAsanId={setAsanId} setPhone={setPhone} />
            </VStack>
          </Box>

          <AsanKobilButton
            onClick={handleSubmit}
            isDisabled={isButtonDisabled}
          />
        </VStack>
      </Layout>
    );
  }
}
