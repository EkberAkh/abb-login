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

  const submitFunc = (value: any) => {
    console.log(value);
  };

  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          {t("onboarding.iforgotPassword")}
        </Text>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(submitFunc)}>
          <FormControl gap="24px" isInvalid={!!errors.username}>
            <FormLabel mb="6px" fontWeight="500">
              {t("onboarding.username")}
            </FormLabel>
            <Controller
              name="username"
              control={control}
              rules={{
                required: t("onboarding.errorMessages.username.required"),
              }}
              render={({ field }) => (
                <Input {...field} type="text" borderColor="gray.300" />
              )}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
            <Button
              type="submit"
              width="100%"
              padding="10px 24px"
              backgroundColor="#2058BB"
              color="white"
              fontSize="18px"
              lineHeight="28px"
              fontWeight="500"
              mt="16px"
            >
              {t("common.actions.resetPassword")}
            </Button>
          </FormControl>
          <DevTool control={control} />

          <NavigationLink href="/">
            <Button
              colorScheme="gray"
              variant="ghost"
              width="100%"
              mt="16px"
              padding="10px 24px"
              leftIcon={<ArrowBackIcon width="24px" h="24px" />}
            >
              {t("common.actions.backToLogin")}
            </Button>
          </NavigationLink>
        </form>
      </VStack>
    </Layout>
  );
};

export default ForgotPassword;
