"use client"
import { ResetPasswordForm } from './ResetPasswordForm';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
// import LoginLayout from '../src/components/LoginLayout';
import {Layout} from '../../../components/Layout/index'
// import { fetcher } from '../src/config/axiosConfig';
// import { services } from '../src/config/services';

export interface ILinkDataProps {
  username?: string;
  userId?: number;
  expired?: boolean;
  active?: boolean;
  token?: string;
}

export default function ResetPasswordPage(): JSX.Element {
  const t = useTranslations();

  
  const searchParams = useSearchParams();
  const router = useRouter()
  const locale = searchParams.get("locale");
  let query = searchParams.get("query");
  const asPath = searchParams.get("asPath");
  const push = searchParams.get("push");
  
  const [linkData, setLinkData] = useState<ILinkDataProps>({});
  const [showResetPage, setShowResetPage] = useState<boolean>(true);
  let resetFailoryToken = "default-token";

//   const checkTokenExpiry = async (token: string) => {
//     fetcher(`${services.auth}/check-expiry/${token}`)
//       .then((res) => {
//         setLinkData(res);
//       })
//       .catch((e) => {
//         if (e?.data?.message === 'TOKEN_NOT_FOUND') {
//           push(`/${locale}/resetfailory?token=notfound`, undefined, {
//             shallow: true
//           });
//           setShowResetPage(false);
//         }
//       });
//   };

//   useEffect(() => {
//     if (resetPasswordToken === '' || asPath === '/resetpassword' || !asPath.includes('?token')) {
//       push('/', undefined, { shallow: true });
//     } else if (asPath.includes('?token') && resetPasswordToken) {
//       checkTokenExpiry(resetPasswordToken as string);
//     }
//   }, [resetPasswordToken, asPath]);

//   useEffect(() => {
//     if (Object.keys(linkData).length !== 0) {
//       if (linkData?.expired === false && linkData?.active === true) {
//         setShowResetPage(true);
//       } else {
//         push(`/${locale}/resetfailory?token=${resetPasswordToken}&username=${linkData.username}`, undefined, {
//           shallow: true
//         });
//         setShowResetPage(false);
//       }
//     } else {
//       setShowResetPage(true);
//     }
//   }, [linkData]);

  return (
    <>
      {showResetPage && (
        <>
          <Layout>
          
            <Flex w="100%" mt="60px" mx="auto" flexDirection="column" alignItems="center">
              <ResetPasswordForm linkData={linkData} />
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<ArrowBackIcon stroke="brand.600" />}
                type="submit"
                w="100%"
                size="lg"
                mt="16px"
                _hover={{ bg: 'gray.100' }}
                _active={{ bg: 'gray.200' }}
                _focus={{ bg: 'gray.100' }}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/${locale}?toKobilTab=true`);
                }}
              >
                {t('login.backToLogin')}
              </Button>
            </Flex>
     
          </Layout>
        </>
      )}
    </>
  );
}


