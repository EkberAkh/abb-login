import axios, { AxiosRequestConfig } from 'axios';
import Router from 'next/router';
import { services, cookieOptions } from './services';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'js-cookie';
import { createStandaloneToast } from '@chakra-ui/react';
import { i18n } from 'next-i18next';
export const axiosInstance = axios.create();

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res:any) => {
    return res.data;
  });
export const blobFetcher = (url: string) =>
  axiosInstance
    .get(url, {
      responseType: 'blob'
    })
    .then((res:any) => res.data);

export const post = (url: string, data?: any, config?: AxiosRequestConfig<any>) =>
  axiosInstance.post(url, data, config).then((res:any) => res.data);
export const put = (url: string, data?: any, config?: AxiosRequestConfig<any>) =>
  axiosInstance.put(url, data, config).then((res:any) => res.data);
export const remove = (url: string) => axiosInstance.delete(url).then((res:any) => res.data);

axiosInstance.interceptors.request.use(
  async (config:any) => {
    if (config.url !== refreshTokenUrl) {
        let Authorization = `Bearer ${Cookies.get('access')}`;
      return { ...config, headers: { ...config.headers, Authorization } };
    }
    return config;
  },
  (error:any) => {
    Promise.reject(error);
  }
);

const refreshTokenUrl = `${services.auth}/token`;

const refreshAuthLogic = () => {
  return axiosInstance
    .post(
      refreshTokenUrl,
      {},
      {
        headers: {
          Authorization:` Bearer ${Cookies.get('refresh')}`
        }
      }
    )
    .then((response:any) => {
      Cookies.set('access', response.data.accessToken, cookieOptions);
      Cookies.set('refresh', response.data.refreshToken, cookieOptions);
      return Promise.resolve();
    })
    .catch((err:any) => {
      if (Cookies.get('access') && Cookies.get('refresh')) {
        Cookies.remove('access');
        Cookies.remove('access.sig');
        Cookies.remove('refresh');
        Cookies.remove('refresh.sig');
      }
      return Promise.reject(err);
    });
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  retryInstance: axiosInstance
});

axiosInstance.interceptors.response.use(
  (response:any) => {
    return response;
  },
  function (error:any) {
    const { toast } = createStandaloneToast();
    if (error.response?.status === 401 && error.config.url === refreshTokenUrl) {
      if (Cookies.get('access') && Cookies.get('refresh')) {
        Cookies.remove('access');
        Cookies.remove('access.sig');
        Cookies.remove('refresh');
        Cookies.remove('refresh.sig');
      }

      Router.push('/');
      return;
    }

    if (error?.response?.status === 404) {
      Router.push('/');
    }

    if (error?.response?.data?.size && error?.response?.status === 404) {
      toast({
        title: i18n?.t('common:errors.REQUISITES_FILE_NOT_FOUND') as string,

        position: 'top',
        status: 'warning',
        duration: 6000,
        isClosable: true,
        id: 'app-exception'
      });
    }

    return Promise.reject(error.response);

  }
);

export default axiosInstance;