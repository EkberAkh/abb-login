import { Layout } from "@/components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

const forgotPassword = () => {
  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          Şifrəmi unutdum
        </Text>
        <FormControl gap="24px">
          <FormLabel mb="6px" fontWeight="500">
            İstifadəçi adı
          </FormLabel>
          <Input type="text" borderColor="gray.300" />
        </FormControl>
        <Button
          width="100%"
          padding="10px 24px"
          backgroundColor="#2058BB"
          color="white"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
          mt="16px"
        >
          Şifrəni yenilə
        </Button>
        <Button colorScheme="teal" variant="ghost" width="100%" mt="16px" color="#2058BB" padding="10px 24px">
       
          Girişə qayıdın
        </Button>
      </VStack>
    </Layout>
  );
};

export default forgotPassword;
