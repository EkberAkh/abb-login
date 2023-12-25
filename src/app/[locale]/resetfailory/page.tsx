"use client";
import { useEffect, useState } from "react";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { services } from "./services";
import { post } from "./post";
import { useTranslations } from "next-intl";
import LinksIcon from "./linkIcons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ResetFailoryPage(): JSX.Element {
  const t = useTranslations("login");
  const toast = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const locale = searchParams.get("locale");
  let query = searchParams.get("query");
  const [successDescription, setSuccessDescription] = useState<string>("");
  let resetFailoryUsername = "default-username";
  let resetFailoryToken = "default-token";
  let pathNameFirst = pathName.split("/")[1]
  if (query) {
    try {
      const queryObject = JSON.parse(query);
      resetFailoryUsername = queryObject.username || resetFailoryUsername;
      resetFailoryToken = queryObject.token || resetFailoryToken;
    } catch (e) {
      console.error("Error parsing query string: ", e);
    }
  }
  const getANewLink = async () => {
    const requestData = {
      username: resetFailoryUsername,
    };

    try {
      await post(`${services.mail}/${resetFailoryUsername}`, requestData);
      setSuccessDescription(
        t("forgotPassword.forgotPasswordForm.sentToMailbox")
      );
    } catch (e: any) {
      if (e.errors?.length !== 0) {
        console.log("err", e.error);
      }
    }
    router.push(`/${pathNameFirst}/onboarding`)

  };

  useEffect(() => {
    if (successDescription) {
      toast({
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
        description: successDescription,
      });
    }
  }, [successDescription]);

  return (
    <Flex
      h="100vh"
      w="100%"
      p="24px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LinksIcon />
      <Text
        mt="60px"
        color="gray.700"
        fontSize={{ base: "lg", md: "3xl" }}
        fontWeight="semibold"
        lineHeight="9"
        textAlign="center"
      >
        {resetFailoryToken === "notfound"
          ? t("forgotPassword.resetFailoryPage.token-not-found")
          : t("forgotPassword.resetFailoryPage.heading")}
      </Text>
      {resetFailoryToken === "notfound" ? (
        <Button
          colorScheme="brand"
          variant="ghost"
          leftIcon={<ChevronLeftIcon stroke="brand.600" />}
          type="submit"
          w="auto"
          size="lg"
          mt="16px"
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.200" }}
          _focus={{ bg: "gray.100" }}
          onClick={(e: any) => {
            e.preventDefault();
            router.push(`/${locale}?toKobilTab=true`, undefined);
          }}
        >
          {t("backToLogin")}
        </Button>
      ) : (
        <>
          <Text
            mt="16px"
            color="gray.500"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="normal"
            lineHeight="5"
            textAlign="center"
          >
            {t("forgotPassword.resetFailoryPage.description")}
          </Text>
          <Button mt="48px" colorScheme="brand" size="lg" onClick={getANewLink}>
            {t("forgotPassword.resetFailoryPage.getANewLink")}
          </Button>
        </>
      )}
    </Flex>
  );
}
