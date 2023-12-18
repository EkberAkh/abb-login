"use client";
import { Layout } from "@/components/Layout";
import {
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Icon,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const kobilOTP = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const isKobilOtpPath = /\/(az|en|ru)\/kobilotp/.test(currentPath);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Layout>
      <VStack
        marginY="0"
        marginX="auto"
        maxWidth="480px"
        alignItems="start"
        width="100%"
      >
        <HStack
          mb="24px"
          fontSize="30px"
          lineHeight="36px"
          fontWeight="600"
          color="gray.400"
        >
          <Link href={"/login"}>
            <Text>ASAN imza</Text>
          </Link>

          <span>/</span>
          <Link href={"/kobilotp"}>
            <Text color={isKobilOtpPath ? "gray.700" : "gray.400"}>
              KOBIL OTP
            </Text>
          </Link>
        </HStack>
        <FormControl>
          <FormLabel mb="6px" fontWeight="500">
            İstifadəçi adı
          </FormLabel>

          <Input type="text" borderColor="gray.300" />
          <FormLabel mb="8px" mt="16px" fontWeight="500">
            Şifrə
          </FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              borderColor="gray.300"
            />
            <InputRightElement>
              <IconButton
                borderWidth="1px 1px 1px 0px"
                borderColor="gray.300"
                backgroundColor="white"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                onClick={handleTogglePassword}
              />
            </InputRightElement>
          </InputGroup>
         
        </FormControl>
        <Text
          alignSelf="self-end"
          color="#2058BB"
          fontWeight="500"
          fontSize="sm"
          mt="8px"
          mb="8px"
        >
          <Link href={"/az/forgotpassword"}>Şifrəmi unutdum</Link>
        </Text>
        <Button
          width="100%"
          padding="10px 24px"
          backgroundColor="gray.300"
          color="white"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
        >
          Davam et
        </Button>
        <Text alignSelf="center" mt="24px" mb="24px">
          və ya
        </Text>
        <Button
          width="100%"
          padding="10px 24px"
          backgroundColor="gray.200"
          color="gray.800"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
        >
          Qeydiyyat
        </Button>
      </VStack>
    </Layout>
  );
};

export default kobilOTP;
