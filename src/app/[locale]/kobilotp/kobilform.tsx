import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useTranslations } from "next-intl";
import React from "react";
import { Controller, useForm } from "react-hook-form"
import KobilOtp from "./page";

const KobilForm = () => {
    const t = useTranslations();
    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
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
    return(
        <form style={{ width: "100%" }} onSubmit={handleSubmit(submitFunc)}>
        <FormControl gap="24px" isInvalid={!!errors.username}>
            <FormLabel mb="6px" fontWeight="500">
              {t("login.username")}
            </FormLabel>
            <Controller
              name="username"
              control={control}
              rules={{
                required: t("login.errorMessages.username.required"),
              }}
              render={({ field }) => (
                <Input {...field} type="text" borderColor="gray.300" />
              )}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        
          </FormControl>
          <FormLabel mb="8px" mt="16px" fontWeight="500">
              {t("login.firstPassword")}
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                borderColor="gray.300"
              />
              <InputRightElement>
                <IconButton
                variant="gray"
                  borderWidth="1px 1px 1px 0px"
                  borderColor="gray.300"
                  backgroundColor="white"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
          </form>
    )
}
export default KobilForm;