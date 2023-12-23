import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface AsanImzaProps {
    setAsanId: (id: string) => void;
    setPhone: (phone: string) => void;
  }
const AsanImzaForm: React.FC<AsanImzaProps> = ({ setAsanId, setPhone }) => {
    const t = useTranslations();
    const {
      control,
      formState: { errors },
    } = useForm({
      mode: "all",
      defaultValues: {
        asanId: "",
        phoneNumber: ""
      },
    });
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
      };
  
    // Update: Adjusted to use a local state and useEffect to update the parent state
    const [localAsanId, setLocalAsanId] = useState("");
  
    // Whenever localAsanId changes, update the parent state
    useEffect(() => {
      setAsanId(localAsanId);
    }, [localAsanId, setAsanId]);
  
    return(
        <FormControl>
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
            />
          )}
        />
      </InputGroup>

      <FormErrorMessage mt="0.5rem">
        {errors?.phoneNumber?.message}
      </FormErrorMessage>
        <FormLabel color="gray.700">{t("login.asanID")}</FormLabel>
        <Controller
          name="asanId"
          control={control}
          rules={{
            required: t("login.errorMessages.asanID.required"),
            validate: (value: string) => {
              if (value.length !== 6) {
                return t("login.errorMessages.asanID.matches");
              }
              return undefined;
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              borderColor="gray.300"
              _invalid={{ borderColor: "red.500" }}
              placeholder="000000"
              isInvalid={!!errors.asanId}
              type="number"
              w="100%"
              maxLength={6} // Setting the maxLength here
              onChange={(e) => {
                if (e.target.value.length <= 6) {
                  field.onChange(e);
                  setLocalAsanId(e.target.value);
                }
              }}
            />
          )}
        />
        {errors?.asanId && (
          <Text color="red" fontSize="sm" mt="0.5rem">
            {errors?.asanId?.message}
          </Text>
        )}
        
      </FormControl>
    )
}
export default AsanImzaForm;