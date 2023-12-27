import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { BaseSyntheticEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IKobilProps {
  setUsernameValue: React.Dispatch<React.SetStateAction<string>>;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
}
const KobilForm: React.FC<IKobilProps> = ({ setUsernameValue, setPasswordValue }) => {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);


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
      password: "",
    },
  });


  function submitFunc(data: { username: string; password: string; }, event?: BaseSyntheticEvent<object, any, any> | undefined): unknown {
    throw new Error("Function not implemented.");
  }

  return (
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
          render={({ field }) => <Input {...field} type="text" borderColor="gray.300" onChange={(e) => {
            field.onChange(e);
            setUsernameValue(e.target.value)
          }} />}
        />
        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
      </FormControl>

      <FormControl gap="24px" isInvalid={!!errors.password}>
        <FormLabel mb="8px" mt="16px" fontWeight="500">
          {t("login.firstPassword")}
        </FormLabel>
        <InputGroup>
          <Controller
            name="password"
            control={control}
            rules={{
              required: t("login.errorMessages.firstPassword.required"),
            }}
            render={({ field }) => (
              <Input {...field} type={showPassword ? "text" : "password"} borderColor="gray.300" onChange={(e) => {
                field.onChange(e);
                setPasswordValue(e.target.value)
              }}/>
            )}
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
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
    </form>
  );
};

export default KobilForm;
