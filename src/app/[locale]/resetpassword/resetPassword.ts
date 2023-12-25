import { useTranslations } from "next-intl";
import { useState } from "react";
import { ILinkDataProps } from "./page";
import { put } from "../resetfailory/post";
import { services } from "../resetfailory/services";

export const useResetPassword = (
    getValues: any,
    setError: any,
    clearErrors: (x: string) => void,
    linkData: ILinkDataProps
  ) => {
    const [isSuccess, setisSuccess] = useState<boolean>(false);
    const  t  = useTranslations();
    const onSubmit = async (data: any) => {
      const newPasswordValue = getValues('newPassword');
      const repeatPasswordValue = getValues('repeatPassword');
      if (newPasswordValue && repeatPasswordValue) {
        if (newPasswordValue !== repeatPasswordValue) {
          setError('repeatPassword', {
            type: 'matching',
            message: t('login.errorMessages.repeatPassword.matches')
          });
        } else {
          clearErrors('repeatPassword');
          const requestData = {
            userId: linkData.userId,
            newPassword: data.newPassword,
            rePassword: data.repeatPassword,
            token: linkData.token
          };
          try {
            await put(`${services.auth}/new-password`, requestData);
            setisSuccess(true);
          } catch (e: any) {
            if (e.errors?.length !== 0) {
              setisSuccess(false);
              console.log('err', e.errors);
            }
          }
        }
      }
    };
    return { onSubmit, isSuccess };
  };