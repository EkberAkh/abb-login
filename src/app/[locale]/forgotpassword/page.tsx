"use client";

import { Layout } from "@/components/Layout";
import { VStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import FormUsername from "./formUsername";
import ForgotButtons from "./forgotButtons";
import { FormProvider, useForm } from "react-hook-form";

const DevTool: React.ComponentType<any> = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  {
    ssr: false,
  }
);

const ForgotPassword = () => {
  const t = useTranslations();
  const methods = useForm({
    mode: "all",
    defaultValues: {
      username: "",
    },
  });

  return (
    <Layout>
      <FormProvider {...methods}>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          {t("login.forgotPassword.forgotPasswordForm.heading")}
        </Text>
        <FormUsername />
        <ForgotButtons  />
      </VStack>
      </FormProvider>
    </Layout>
  );
};

export default ForgotPassword;
