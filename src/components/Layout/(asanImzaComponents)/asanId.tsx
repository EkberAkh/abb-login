import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface AsanIDProps {
  setAsanId: (id: string) => void;
}

const AsanID: React.FC<AsanIDProps> = ({ setAsanId }) => {
  const t = useTranslations();
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      asanId: "",
    },
  });

  // Update: Adjusted to use a local state and useEffect to update the parent state
  const [localAsanId, setLocalAsanId] = useState("");

  // Whenever localAsanId changes, update the parent state
  useEffect(() => {
    setAsanId(localAsanId);
  }, [localAsanId, setAsanId]);

  return (
    <FormControl>
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
  );
};

export default AsanID;
