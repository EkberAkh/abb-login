import { NavigationLink } from "@/components/NavigationLink";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

const ForgotButtons = () => {
  const toast = useToast();
  const t = useTranslations();
  const {control, handleSubmit, formState: {errors}} = useFormContext<{username: string}>()
      
  
  const submitFunc = handleSubmit(async ({username}: {username: string}) => {
    const res = await fetch(`http://localhost:8080/auth/v1/mail/${username}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    })

    const data = res.json();

    if(res.ok){
      toast({
        title: t('login.forgotPassword.forgotPasswordForm.sentToEmail'),
        position: 'bottom-left'
      });
    }
  });
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
        onClick={submitFunc}
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
