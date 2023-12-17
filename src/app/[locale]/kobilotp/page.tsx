"use client";
import { Layout } from "@/components/Layout";
import {
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const kobilOTP = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const isKobilOtpPath = /\/(az|en|ru)\/kobilotp/.test(currentPath);
  return (
    <Layout>
      <VStack gap="24px" alignItems="start" padding="80px" width="100%">
      <HStack fontSize="30px" lineHeight="36px" fontWeight="600"  color="gray.400">
          <Link href={"/login"}>ASAN imza</Link>
          <span>/</span>
          <Link href={"/kobilotp"}>
            <Text color={isKobilOtpPath ? "gray.700" : "gray.400"}>
              KOBIL OTP
            </Text>
          </Link>
        </HStack>
        <FormControl gap="24px">
          <FormLabel mb="6px" fontWeight="500">
            İstifadəçi adı
          </FormLabel>
          <Input type="text" borderColor="gray.300" />
          <FormLabel mb="8px" mt="16px" fontWeight="500">
            Şifrə
          </FormLabel>
          <Input type="text" borderColor="gray.300" />
        </FormControl>
        <Text alignSelf="self-end" color="#2058BB" fontWeight="500">
          <Link href={"/"}>Şifrəmi unutdum</Link>
        </Text>
        <Button
          width="100%"
          padding="10px 24px"
          backgroundColor="gray.300"
          color="white"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
        >
          Davam et
        </Button>
        <Text alignSelf="center">və ya</Text>
        <Button
          width="100%"
          padding="10px 24px"
          backgroundColor="gray.200"
          color="gray.800"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
        >
          Qeydiyyat
        </Button>
      </VStack>
    </Layout>
  );
};

export default kobilOTP;