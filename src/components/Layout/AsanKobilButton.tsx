import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface AsanKobilButtonProps {
  onClick: (id: string, password: string) => void;
  isDisabled: boolean;
}
const AsanKobilButton: React.FC<AsanKobilButtonProps> = ({ onClick, isDisabled }) => {
  const t = useTranslations();
  const router = useRouter();
  const pathName = usePathname();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const langPath = pathName.split("/")[1];
  const submitFunc = async () => {
    setIsLoading(true);
    try {
      await onClick(id, password);
    } finally {
      setIsLoading(false);
    }
  };
  const registrationHandler = () => {
      router.push(`/${langPath}/onboarding`)
  }
  return (
    <Box width="100%">
      <Button
        onClick={submitFunc}
        padding="10px 24px"
        lineHeight="28px"
        colorScheme="brand"
        variant="solid"
        w="100%"
        isDisabled={isDisabled || isLoading}
      >
        {isLoading ? <Spinner /> : t("common.actions.login")}
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
      <Button variant="gray" w="100%" lineHeight="28px" padding="10px 24px" onClick={registrationHandler}>
        {t("login.beCustomer")}
      </Button>
    </Box>
  );
};
export default AsanKobilButton;
