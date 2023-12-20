import { Layout } from "@/components/Layout";
import { HStack, Image, Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import React from "react";

const Footer = () => {
  const t = useTranslations();
  return (
    <HStack
      w="100%"
      justify="space-between"
      align="center"
      h="87px"
      px="80px"
    >
      <Image src="/login/images/asan-logo.svg" />
      <Link fontSize="14px" color="gray.500" fontWeight="400">
        {t("login.howToGetAsanImza")}
      </Link>
    </HStack>
  );
};

export default Footer;
