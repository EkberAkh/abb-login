"use client";
import { Layout } from "@/components/Layout";
import AsanKobilButton from "@/components/Layout/AsanKobilButton";
import { NavigationLink } from "@/components/NavigationLink";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,

} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormUsername from "./formUsername";
import FormPass from "./formPass";
import IForgotPass from "./iforgotpass";
import AsanKobilLink from "@/components/Layout/asanKobilLink";

const KobilOtp = () => {
  const t = useTranslations();

  const [inputTextValue, setinputTextValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");
  
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



  const checkInputTextAndNumberValue =
    inputTextValue.length === 8 && inputNumberValue.length === 5;

  
  const pathname = usePathname() || "";
  console.log(pathname);
  
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
        <AsanKobilLink/>
        <VStack
          marginY="0"
          marginX="auto"
          maxWidth="480px"
          alignItems="start"
          width="100%"
        >
          <FormUsername/>
          <FormPass/>
          <IForgotPass/>
        </VStack>
        <AsanKobilButton/>
      </VStack>
    </Layout>
  );
};

export default KobilOtp;
