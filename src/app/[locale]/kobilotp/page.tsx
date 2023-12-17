import { Layout } from "@/components/Layout";
import {
  HStack,
  Link,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const kobilOTP = () => {
  return (
    <Layout>
      <VStack gap="24px" alignItems="start">
        <HStack>
          <Link>ASAN imza </Link>
          <span>/</span>
          <Link>KOBIL OTP</Link>
        </HStack>
        <FormControl >
          <FormLabel>
            İstifadəçi adı
            <Input type="text" />
          </FormLabel>

          <FormLabel>
            Şifrə
            <Input type="text" />
          </FormLabel>
        </FormControl>
      </VStack>
    </Layout>
  );
};

export default kobilOTP;
