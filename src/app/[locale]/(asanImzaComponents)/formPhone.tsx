import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";


const FormPhone = () => {
    const t = useTranslations();
    
  const [inputTextValue, setinputTextValue] = useState("");
    const {
        control,
        formState: { errors },
      } = useForm({
        mode: "all",
        defaultValues: {
          phoneNumber: "",
          password: "",
        },
      });
    return(
        <FormControl w="100%" isInvalid={!!errors?.phoneNumber}>
              <FormLabel color="gray.700">{t("login.phoneNumber")}</FormLabel>
              <InputGroup w="100%">
                <InputLeftAddon color="gray.700" bg="gray.100">
                  +994
                </InputLeftAddon>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: t("login.errorMessages.phoneNumber.required"),
                    validate: (value: string) => {
                      if (value.length !== 9) {
                        return t("login.errorMessages.phoneNumber.length");
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
    )
}
export default FormPhone;