"use client";
import { Layout } from "@/components/Layout";
import { NavigationLink } from "@/components/NavigationLink";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,

} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const KobilOtp = () => {
  const t = useTranslations("common");
  const t2 = useTranslations("login");
  const [textValue, setTextValue] = useState("ASAN imza");

  const [showPassword, setShowPassword] = React.useState(false);
  const [inputTextValue, setinputTextValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });



  const checkInputTextAndNumberValue =
    inputTextValue.length === 8 && inputNumberValue.length === 5;

  const clickHandler = (e: any) => {
    setTextValue(e.target.textContent);
  };
  const pathname = usePathname() || "";
  console.log(pathname);
  useEffect(() => {
    if (/\/kobilotp$/.test(pathname)) {
      setTextValue("KOBIL OTP");
    }
  }, [pathname]);
  const isKobilPath = /^(az|en|ru)\/kobilotp$/.test(pathname);
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
        <HStack
          w="100%"
          fontSize="30px"
          lineHeight="36px"
          fontWeight="600"
          gap="8px"
          p="16px 0"
          color="gray.400"
        >
          <NavigationLink href="/">
            <Text
              cursor="pointer"
              onClick={clickHandler}
              color={isKobilPath ? "gray.700" : "gray.400"}
            >
              ASAN imza
            </Text>
          </NavigationLink>

          <Text>/</Text>
          <Text
            cursor="pointer"
            color={
              textValue === "KOBIL OTP" || /\/kobilotp$/.test(pathname)
                ? "gray.700"
                : "gray.400"
            }
            onClick={clickHandler}
          >
            KOBIL OTP
          </Text>
        </HStack>
        <VStack
          marginY="0"
          marginX="auto"
          maxWidth="480px"
          alignItems="start"
          width="100%"
        >
          <FormControl>
            <FormLabel mb="6px" fontWeight="500">
              {t2("username")}
            </FormLabel>
            <Input type="text" borderColor="gray.300" />
            <FormLabel mb="8px" mt="16px" fontWeight="500">
              login.password
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
            <NavigationLink href={"/forgotpassword"}>
              I forgot pass
            </NavigationLink>
          </Text>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default KobilOtp;
