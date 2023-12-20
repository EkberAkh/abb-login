import { Box, Button, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const AsanKobilButton = () => {
  const t = useTranslations();

  const [inputTextValue, setinputTextValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");
  const submitFunc = (value: any) => {
    console.log(value);
  };
  const checkInputTextAndNumberValue =
    inputTextValue.length === 8 && inputNumberValue.length === 5;

  return (
    <Box width="100%">
      <Button
        padding="10px 24px"
        lineHeight="28px"
        onSubmit={submitFunc}
        colorScheme="brand"
        variant="solid"
        w="100%"
        isDisabled={checkInputTextAndNumberValue ? false : true}
      >
        {t("common.actions.login")}
      </Button>
      <Text
        textAlign="center"
        w="100%"
        color="gray.600"
        padding="8px 0"
        lineHeight="24px"
        mt="16px"
        mb="16px"
      >
        {t("login.or")}
      </Text>
      <Button variant="gray" w="100%" lineHeight="28px" padding="10px 24px">
        {t("login.beCustomer")}
      </Button>
    </Box>
  );
};
export default AsanKobilButton;
