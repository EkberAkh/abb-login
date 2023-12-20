"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Layout } from "@/components/Layout";
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
  InputRightElement,
  IconButton,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { NavigationLink } from "../../components/NavigationLink";
import { usePathname } from "next/navigation";

export default function Home() {
  const t = useTranslations("common");
  const t2 = useTranslations("login");
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputTextValue, setinputTextValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");


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

  const submitFunc = (value: any) => {
    console.log(value);
  };

  const checkInputTextAndNumberValue =
    inputTextValue.length === 8 && inputNumberValue.length === 5;
  const pathname = usePathname() || "";
  console.log(pathname);
  const isAsanImzaPath =  /^(\/az|\/en|\/ru)$/.test(pathname);

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
          <Text
            cursor="pointer"
        
            color={isAsanImzaPath ? "gray.700" : "gray.400"}
          >
            ASAN imza
          </Text>
          <Text>/</Text>
          <NavigationLink href="/kobilotp">
            <Text
              color= "gray.400"
              cursor="pointer"
        
            >
              KOBIL OTP
            </Text>
          </NavigationLink>
        </HStack>

        <Box display="flex" flexDirection="column" gap="18px" width="100%">
          <VStack gap="8px" w="100%">
            <FormControl w="100%" isInvalid={!!errors?.phoneNumber}>
              <FormLabel color="gray.700">{t2("phoneNumber")}</FormLabel>
              <InputGroup w="100%">
                <InputLeftAddon color="gray.700" bg="gray.100">
                  +994
                </InputLeftAddon>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: t2("errorMessages.phoneNumber.required"),
                    validate: (value: string) => {
                      if (value.length !== 9) {
                        return t2("errorMessages.phoneNumber.length");
                      }
                      return undefined;
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderLeft="0"
                      type="tel"
                      placeholder="00 000 00 00"
                      borderColor="gray.300"
                      w="100%"
                      maxLength={9}
                      onChange={(e) => {
                        field.onChange(e);
                        setinputTextValue(field.value);
                      }}
                    />
                  )}
                />
              </InputGroup>

              <FormErrorMessage mt="0.5rem">
                {errors?.phoneNumber?.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <VStack gap="8px" w="100%">
            <FormControl>
              <FormLabel color="gray.700">{t2("asanID")}</FormLabel>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: t2("errorMessages.asanID.required"),
                  validate: (value: string) => {
                    if (value.length !== 6) {
                      return t2("errorMessages.asanID.length");
                    }
                    return undefined;
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={field.value}
                    borderColor="gray.300"
                    _invalid={{ borderColor: "red.500" }}
                    placeholder="000000"
                    isInvalid={!!errors.password}
                    type="number"
                    w="100%"
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        field.onChange(e);
                        setInputNumberValue(field.value);
                      }
                    }}
                  />
                )}
              />
              {errors?.password && (
                <Text color="red" fontSize="sm" mt="0.5rem">
                  {errors?.password?.message}
                </Text>
              )}
            </FormControl>
          </VStack>
        </Box>

        <Button
          onSubmit={submitFunc}
          colorScheme="brand"
          variant="solid"
          w="100%"
          isDisabled={checkInputTextAndNumberValue ? false : true}
        >
          {t("actions.login")}
        </Button>
        <Text textAlign="center" w="100%" color="gray.600">
          {t2("or")}
        </Text>
        <Button variant="gray" w="100%">
          {t2("beCustomer")}
        </Button>
      </VStack>
    </Layout>
  );
}
