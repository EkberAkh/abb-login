"use client";

import { Layout } from "@/components/Layout";
import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import ForgotButtons from "./forgotButtons";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

const DevTool: React.ComponentType<any> = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  {
    ssr: false,
  }
);

const ForgotPassword = () => {
  const [forgetValue, setForgetValue] = useState<string>("");
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
  
const submitFunc = (value: any) => {
console.log(value);
};

const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForgetValue(e.target.value)
}
  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          {t("login.forgotPassword.forgotPasswordForm.heading")}
        </Text>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(submitFunc)}>
        <FormControl gap="24px" isInvalid={!!errors.username}>
            <FormLabel mb="6px" fontWeight="500">
              {t("login.username")}
            </FormLabel>
            <Controller
              name="username"
              control={control}
              rules={{
                required: t("login.errorMessages.username.required"),
              }}
              render={({ field }) => (
                <Input {...field} type="text" borderColor="gray.300" onChange={(e) => {
                  field.onChange(e);
                  handlePhoneChange(e);
                }}/>
              )}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        
          </FormControl>
          </form>
        <ForgotButtons forgetValue={forgetValue} />
      </VStack>
    </Layout>
  );
};

export default ForgotPassword;
