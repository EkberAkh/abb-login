"use client";

import { Layout } from "@/components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { NavigationLink } from "@/components/NavigationLink";
import dynamic from "next/dynamic";
import FormUsername from "../kobilotp/formUsername";
import ForgotButtons from "./forgotButtons";

const DevTool: React.ComponentType<any> = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  {
    ssr: false,
  }
);

const ForgotPassword = () => {
  const t = useTranslations();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      username: "",
    },
  });

  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          {t("login.forgotPassword.forgotPasswordForm.heading")}
        </Text>
        <FormUsername />
        <ForgotButtons/>
      </VStack>
    </Layout>
  );
};

export default ForgotPassword;
