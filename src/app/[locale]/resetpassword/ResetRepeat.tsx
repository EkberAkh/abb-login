// import { textFormat } from '../../../utils/utils';
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Trans } from 'react-i18next';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useTranslations } from 'next-intl';

export const ResetRepeat = () => {
  const t = useTranslations();
  const { control, formState, clearErrors, getValues, setValue, setError } = useFormContext();
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { errors } = formState;
  return (
    <FormControl fontSize={{ base: 'xs', md: 'md' }} w="100%" isInvalid={!!errors.repeatPassword}>
      <FormLabel fontSize="inherit" htmlFor="repeatPassword" mb="6px">
        {t('login.forgotPassword.resetPasswordForm.repeatPassword')}
      </FormLabel>
      <InputGroup mt="0px" position="relative" mb={errors.repeatPassword ? '6px' : '16px'} flexDirection="column">
        <Controller
          name="repeatPassword"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: t('login.errorMessages.repeatPassword.required')
            }
          }}
          render={({ field: { value } }) => (
            <Input
              padding="16px"
              data-test-id="repeatPassword"
              id="repeatPassword"
              onChange={(e) => {
                setValue('repeatPassword', e.target.value);
                const newPasswordValue = getValues('newPassword');
                if (e.target.value) {
                  if (newPasswordValue !== e.target.value) {
                    setError('repeatPassword', {
                      type: 'matching',
                      message: t('login.errorMessages.repeatPassword.matches')
                    });
                  } else {
                    clearErrors('repeatPassword');
                  }
                } else if (e.target.value === '') {
                  setError('repeatPassword', {
                    type: 'required',
                    message: t('login.errorMessages.repeatPassword.required')
                  });
                }
              }}
            
              value={value}
              type={showPassword ? "text" : "password"}
              isRequired={true}
              minLength={12}
              autoComplete="off"
              isInvalid={!!errors.repeatPassword}
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
                variant="gray"
                borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
                  borderWidth="1px 1px 1px 0px"
                  borderColor="gray.300"
                  backgroundColor="white"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
      </InputGroup>
      <FormErrorMessage display="inline" color="#f31414" fontSize="sm" lineHeight="20px">
        <Trans
          ns="login"
          components={[
            <Text as="span" fontSize={{ base: 'sm', md: 'md' }} key="onboarding-text1" mb={2} fontWeight={400} />,
            <Text as="span" fontSize={{ base: 'sm', md: 'md' }} key="onboarding-text2" fontWeight={700} mb={2} />
          ]}
          i18nKey={errors.newPassword && String(errors.newPassword.message)}
        />
      </FormErrorMessage>
    </FormControl>
  );
};
