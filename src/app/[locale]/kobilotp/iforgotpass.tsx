import { NavigationLink } from "@/components/NavigationLink"
import { Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
const IForgotPass = () => {
    const t = useTranslations();
    return(
        <Text
            alignSelf="self-end"
            color="#2058BB"
            fontWeight="500"
            fontSize="sm"
            mt="8px"
          >
            <NavigationLink href={"/forgotpassword"}>
              {t("login.forgotPassword.forgotPasswordForm.heading")}
            </NavigationLink>
          </Text>
    )
}
export default IForgotPass;