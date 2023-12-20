import { FormControl, FormLabel, Input,Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AsanID = () => {
    const t = useTranslations();
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
      
  const [inputNumberValue, setInputNumberValue] = useState("");
    return(
        <FormControl>
              <FormLabel color="gray.700">{t("login.asanID")}</FormLabel>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: t("login.errorMessages.asanID.required"),
                  validate: (value: string) => {
                    if (value.length !== 6) {
                      return t("login.errorMessages.asanID.length");
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
    )
}

export default AsanID;