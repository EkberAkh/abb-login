import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Controller, useFormContext } from "react-hook-form";

const FormUsername = () => {
    const t = useTranslations();
    const {control,  formState: {errors}} = useFormContext<{username: string}>()
      

    return(
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
    )
}

export default FormUsername;