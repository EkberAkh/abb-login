import { NavigationLink } from "@/components/NavigationLink";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const ForgotButtons = () => {
  const t = useTranslations();
  return (
    <Box width="100%">
      <Button
        type="submit"
        width="100%"
        padding="10px 24px"
        backgroundColor="#2058BB"
        color="white"
        fontSize="18px"
        lineHeight="28px"
        fontWeight="500"
        mt="16px"
      >
        {t("login.forgotPassword.resetPasswordForm.heading")}
      </Button>

      <NavigationLink href="/kobilotp">
        <Button
          colorScheme="gray"
          variant="ghost"
          mt="16px"
          width="100%"
          padding="10px 24px"
          leftIcon={<ArrowBackIcon width="24px" h="24px" />}
        >
          {t("common.actions.backToLogin")}
        </Button>
      </NavigationLink>
    </Box>
  );
};
export default ForgotButtons;
