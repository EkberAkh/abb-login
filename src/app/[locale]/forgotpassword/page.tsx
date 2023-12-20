"use client";

import { Layout } from "@/components/Layout";
import { VStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
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

  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          {t("login.forgotPassword.forgotPasswordForm.heading")}
        </Text>
        <FormUsername />
        <ForgotButtons />
      </VStack>
    </Layout>
  );
};

export default ForgotPassword;
