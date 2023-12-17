"use client";
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
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const forgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      username: "",
    },
  });
  const submitFunc = (value: any) => {
    console.log(value);
  };
  return (
    <Layout>
      <VStack padding="80px" alignItems="start" width="100%">
        <Text mb="32px" fontWeight="700">
          Şifrəmi unutdum
        </Text>
        <form onSubmit={handleSubmit(submitFunc)}>
          <FormControl gap="24px" >
            <FormLabel mb="6px" fontWeight="500">
              İstifadəçi adı
            </FormLabel>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "İstifadəçi adı qeyd olunmayıb",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  borderColor="gray.300"
                  _invalid={{ borderColor: "red.500" }}
                  isInvalid={!!errors.username}
                />
              )}
            />
            {errors?.username && (
              <Text color="red" fontSize="sm" mt="0.5rem">
                {errors?.username?.message}
              </Text>
            )}
            <Button
              type="submit"
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
          </FormControl>
          <DevTool control={control} />
        

        <Button
          colorScheme="teal"
          variant="ghost"
          width="100%"
          mt="16px"
          color="#2058BB"
          padding="10px 24px"
        >
          Girişə qayıdın
        </Button>
        </form>
      </VStack>
    </Layout>
  );
};

export default forgotPassword;
