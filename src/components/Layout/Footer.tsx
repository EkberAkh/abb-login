import { Layout } from "@/components/Layout";
import { HStack, Image, Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const t = useTranslations();
  const pathName = usePathname();
  const path = pathName.split("/")[1];

  const getUrl = () => {
    if (path === "az") {
      return "https://asanimza.az/";
    } else if (path === "en") {
      return "https://asanimza.az/en/";
    } else {
      return "https://asanimza.az/";
    }
  };

  
  return (
<HStack minWidth="465px" justifyContent="space-between" align="center" h="87px" >
  <Image src="/login/images/asan-logo.svg" />
  <Link fontSize="14px" color="gray.500" fontWeight="400" href={getUrl()} target="_blank" pl="20px" _hover={{ textDecoration: "underline" }}>
    {t("login.howToGetAsanImza")}
  </Link>
</HStack>

  );
};

export default Footer;
