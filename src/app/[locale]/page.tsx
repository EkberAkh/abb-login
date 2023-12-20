"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Layout } from "@/components/Layout";
import { useTranslations } from "next-intl";
import { NavigationLink } from "../../components/NavigationLink";
import { usePathname } from "next/navigation";
import {
  Box,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import AsanKobilButton from "@/components/Layout/AsanKobilButton";
import AsanID from "./(asanImzaComponents)/asanId";
import AsanKobilLink from "@/components/Layout/asanKobilLink";
import FormPhone from "./(asanImzaComponents)/formPhone";

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
