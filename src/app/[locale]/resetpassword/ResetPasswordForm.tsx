import { ResetNew } from './ResetNew';
import { useResetPassword } from './resetPassword';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ResetRepeat } from './ResetRepeat';
import { ILinkDataProps } from './page';

interface IProps {
  linkData: ILinkDataProps;
}

export function ResetPasswordForm({ linkData }: IProps): JSX.Element {
  const t = useTranslations();
  const methods = useForm({ mode: 'all' });
  const { handleSubmit, clearErrors, getValues, setError } = methods;

  const { isSuccess, onSubmit } = useResetPassword(getValues, setError, clearErrors, linkData);
  const onError = () => {
    console.log('on error');
  };

  return (
    <>
      <Flex w={{ base: '100%', md: '465px' }} maxW="465px" flexDirection="column">
        <Heading fontSize={{ base: 'md', md: 'lg' }} mt="0px" textAlign={isSuccess ? 'center' : 'left'}>
          {!isSuccess ? t('login.forgotPassword.resetPasswordForm.heading') : t('login.forgotPassword.passwordResetAlert.heading')}
        </Heading>

        {isSuccess ? (
          <Text mb="32px" fontSize="16px" fontWeight="400" lineHeight="24px" color="gray.500" textAlign={'center'}>
            {t('login.forgotPassword.passwordResetAlert.description')}
          </Text>
        ) : null}

        {!isSuccess ? (
          <FormProvider {...methods}>
            <form>
              <ResetNew />
              <ResetRepeat />
              <Button
                id="confirm-button"
                data-test-id="confirm"
                type="submit"
                colorScheme="brand"
                w="100%"
                size="lg"
                mt="16px"
                // disabled={!isValid}
                onClick={handleSubmit((data) => onSubmit(data), onError)}
              >
                {t('login.forgotPassword.resetPasswordForm.confirmButton')}
              </Button>
            </form>
          </FormProvider>
        ) : null}
      </Flex>
    </>
  );
}
