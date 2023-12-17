"use client";

import { Layout } from "@/components/Layout";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const t = useTranslations("common");
  const currentPath = usePathname();
  console.log(currentPath);

  const isKobilOtpPath = /\/(az|en|ru)\/login/;



  return (
    <Layout>
      {/* <h1>{t("actions.next")}</h1> */}

      <HStack fontSize="30px" lineHeight="36px" fontWeight="600"  color="gray.400">
          <Link href={"/login"}>
            <Text  color={isKobilOtpPath ? "gray.700" : "gray.400"}>ASAN imza</Text></Link>
          <span>/</span>
          <Link href={"/kobilotp"}>
            <Text>
              KOBIL OTP
            </Text>
          </Link>
      </HStack>
    </Layout>
  );
}
