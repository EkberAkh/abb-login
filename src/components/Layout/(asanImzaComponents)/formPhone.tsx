import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";

interface FormPhoneProps {
  setPhone: (phone: string) => void;
}

const FormPhone: React.FC<FormPhoneProps> = ({ setPhone }) => {
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <FormControl w="100%" isInvalid={!!errors?.phoneNumber}>
      <FormLabel color="gray.700">{t("login.phoneNumber")}</FormLabel>
      <InputGroup w="100%">
        <InputLeftAddon color="gray.700" bg="gray.100" borderRight="0">
          +994
        </InputLeftAddon>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: t("login.errorMessages.phoneNumber.required"),
            validate: (value: string) => {
              if (value.length !== 9) {
                return t("login.errorMessages.phoneNumber.matches");
              }
              return undefined;
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              borderLeft="0"
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
              type="tel"
              placeholder="00 000 00 00"
              borderColor="gray.300"
              w="100%"
              maxLength={9}
              onChange={(e) => {
                field.onChange(e);
                handlePhoneChange(e);
              }}
              onBlur={field.onBlur} 
            />
          )}
        />
      </InputGroup>

      <FormErrorMessage mt="0.5rem">
        {errors?.phoneNumber?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormPhone;


{/* <InputMask
{...field}
mask="99 999 99 99"
maskChar=" "
alwaysShowMask
type="tel"
placeholder="99 999 99 99"  
style={{
  border:"1px solid rgb(159, 168, 178)",
  borderRadius: "5px",
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
  borderLeft:"0",
  width: '100%',
}}
maxLength={20}
onChange={(e) => {
  field.onChange(e); // react-hook-form's onChange
  setPhone(e.target.value.replace(/\s/g, '')); // Custom handler to update parent state
}}
/> */}