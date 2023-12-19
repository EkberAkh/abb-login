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
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Home() {
  const currentPath = usePathname() || "";
  const isAsanImza = /^\/(az|en|ru)$/.test(currentPath);
  const t = useTranslations("common");
  const t2 = useTranslations("onboarding");
  const [textValue, setTextValue] = useState("ASAN imza");
  const clickHandler = (e: any) => {
    setTextValue(e.target.textContent);
  };

  const { control, handleSubmit, formState: { errors } } = useForm(
    {
      mode: 'all',
      defaultValues: {phoneNumber:'',password:''}
    }
  );

  const submitFunc = (value: any) => {
    console.log(value);
  };



  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(textValue);

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
            onClick={clickHandler}
            color={textValue === "ASAN imza" ? "gray.700" : "gray.400"}
          >
            ASAN imza
          </Text>

          <Text>/</Text>

          <Text
            cursor="pointer"
            color={textValue === "KOBIL OTP" ? "gray.700" : "gray.400"}
            onClick={clickHandler}
          >
            KOBIL OTP
          </Text>
        </HStack>
        {textValue === "ASAN imza" ? (
          <Box display="flex" flexDirection="column" gap="18px" width="100%">
            <VStack gap="8px" w="100%">
              <FormControl w="100%">
                <FormLabel color="gray.700">{t2("phoneNumber")}</FormLabel>
                <InputGroup w="100%">
                  <InputLeftAddon
                    children="+994"
                    color="gray.700"
                    bg="gray.100"
                  />
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: t2("errorMessages.phoneNumber.required"),
                      validate: (value: string)=> {
                        if (value.length !== 9) {
                          return t2("errorMessages.phoneNumber.length");
                        }
                        return undefined;
                      },
                    }}
                    render={({field}) => (
                      <Input 
                        {...field}
                        type="tel" 
                        placeholder="00 000 00 00" 
                        borderColor="gray.300"
                        _invalid={{ borderColor: "red.500" }}
                        isInvalid={!!errors.phoneNumber}
                        w="100%" 
                      />
                    )}
                    />
                </InputGroup>
                {errors?.phoneNumber && (
                      <Text color="red" fontSize="sm" mt="0.5rem">
                        {errors?.phoneNumber?.message}
                      </Text>
                    )}
              </FormControl>
            </VStack>
            <VStack gap="8px" w="100%">
              <FormControl>
                <FormLabel color="gray.700">{t2("asanID")}</FormLabel>
                <Controller 
                  name='password'
                  control={control}
                      rules={{
                        required: t2("errorMessages.asanID.required"),
                        validate: (value: string)=> {
                          if (value.length !== 6) {
                            return t2("errorMessages.asanID.length");
                          }
                          return undefined;
                        },
                      }}
                      render={({field}) => (
                        <Input 
                          {...field}
                          borderColor="gray.300"
                          _invalid={{ borderColor: "red.500" }}
                          isInvalid={!!errors.password}
                          type="number"
                          w="100%"
                        />
                      )
                      }
                />

                      {errors?.password && (
                      <Text color="red" fontSize="sm" mt="0.5rem">
                        {errors?.password?.message}
                      </Text>
                    )}
              </FormControl>
            </VStack>
          </Box>
        ) : (
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
                {t2("password")}
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
                    aria-label={
                      showPassword ? "Hide Password" : "Show Password"
                    }
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
              <Link href={"/az/forgotpassword"}>{t2("iforgotPassword")}</Link>
            </Text>
          </VStack>
        )}

        <Button 
          onSubmit={submitFunc}
          colorScheme="white" bg="gray.300" w="100%">
          {t("actions.login")}
        </Button>
        <Text textAlign="center" w="100%" color="gray.600">
          {t2("or")}
        </Text>
        <Button color="gray.800" w="100%">
          {t("actions.registration")}
        </Button>
      </VStack>
    </Layout>
  );
}
