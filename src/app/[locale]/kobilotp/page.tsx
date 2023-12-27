"use client";
import { Layout } from "@/components/Layout";
import AsanKobilButton from "@/components/Layout/AsanKobilButton";
import { VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IForgotPass from "./iforgotpass";
import AsanKobilLink from "@/components/Layout/asanKobilLink";
import KobilForm from "./kobilform";

const KobilOtp = () => {
  const t = useTranslations();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });
  // const checkInputTextAndNumberValue =
  //   inputTextValue.length === 8 && inputNumberValue.length === 5;

  const pathname = usePathname() || "";
  const handleClick = () => {
    console.log("Button clicked!");
  };
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
        <VStack
          marginY="0"
          marginX="auto"
          maxWidth="480px"
          alignItems="start"
          width="100%"
        >
        <KobilForm setUsernameValue={setUsernameValue} setPasswordValue={setPasswordValue} />

          <IForgotPass />
        </VStack>
        <AsanKobilButton onClick={handleClick} isDisabled={!usernameValue || !passwordValue} />
      </VStack>
    </Layout>
  );
};

export default KobilOtp;
