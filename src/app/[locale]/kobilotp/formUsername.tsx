import { FormControl,FormErrorMessage,FormLabel,Input } from "@chakra-ui/react"
import { DevTool } from "@hookform/devtools";
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form";

const FormUsername = () => {
    const t = useTranslations();
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
          </form>
    )
}

export default FormUsername;