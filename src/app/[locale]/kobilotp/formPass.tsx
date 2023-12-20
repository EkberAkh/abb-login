import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import React from "react";

const FormPass = () => {
    const t = useTranslations();
    
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

    return(
        <FormControl>
            <FormLabel mb="8px" mt="16px" fontWeight="500">
              {t("login.firstPassword")}
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                borderColor="gray.300"
              />
              <InputRightElement>
                <IconButton
                variant="gray"
                  borderWidth="1px 1px 1px 0px"
                  borderColor="gray.300"
                  backgroundColor="white"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
    )
}
export default FormPass;