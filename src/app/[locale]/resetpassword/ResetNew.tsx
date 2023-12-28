import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Trans } from 'react-i18next';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useTranslations } from 'next-intl';


export const ResetNew = () => {
  const t = useTranslations();
  const { control, formState } = useFormContext();
  const { errors } = formState;
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl fontSize={{ base: 'xs', md: 'md' }} w="100%" mb="8px" isInvalid={!!errors?.newPassword}>
      <FormLabel fontSize="inherit" htmlFor="firstPassword" mb="6px">
        {t('login.forgotPassword.resetPasswordForm.newPassword')}
      </FormLabel>
      <InputGroup
        fontSize="inherit"
        mt="0px"
        position="relative"
        mb={errors?.newPassword ? '6px' : '16px'}
        flexDirection="column"
      >
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: t('login.errorMessages.newPassword.required')
            },
            pattern: {
              value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]{12,})$/,
              message: t('login.forgotPassword.resetPasswordForm.errorMessage')
            }
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              padding="16px"
              id="newPassword"
              data-test-id="newPassword"
              onChange={onChange}
            
              value={value}
              type={showPassword ? "text" : "password"}
              isRequired={true}
              minLength={12}
              autoComplete="off"
              isInvalid={!!errors.newPassword}
              errorBorderColor="#f31414"
              onCut={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              fontSize="inherit"
            />
          )}
        />
         <InputRightElement>
                <IconButton
                
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
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
      {/*<FormErrorMessage display="inline" color="#f31414" fontSize="sm" lineHeight="20px">
        <Trans
          ns="login"
          components={[
            <Text as="span" fontSize={{ base: 'sm', md: 'md' }} key="onboarding-text1" mb={2} fontWeight={400} />,
            <Text as="span" fontSize={{ base: 'sm', md: 'md' }} key="onboarding-text2" fontWeight={700} mb={2} />
          ]}
          i18nKey={errors.newPassword && String(errors.newPassword.message)}
        />
        </FormErrorMessage>*/}
    </FormControl>
  );
};
