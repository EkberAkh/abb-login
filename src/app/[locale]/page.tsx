"use client";
import React from "react";
import { Layout } from "@/components/Layout";
import { useTranslations } from "next-intl";
import { Box, VStack } from "@chakra-ui/react";
import AsanKobilButton from "@/components/Layout/AsanKobilButton";
import AsanID from "../../components/Layout/(asanImzaComponents)/asanId";
import AsanKobilLink from "@/components/Layout/asanKobilLink";
import FormPhone from "../../components/Layout/(asanImzaComponents)/formPhone";

export default function Home() {
  const t = useTranslations();

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
        <AsanKobilLink />

        <Box display="flex" flexDirection="column" gap="18px" width="100%">
          <VStack gap="8px" w="100%">
            <FormPhone />
          </VStack>
          <VStack gap="8px" w="100%">
            <AsanID />
          </VStack>
        </Box>

        <AsanKobilButton />
      </VStack>
    </Layout>
  );
}
