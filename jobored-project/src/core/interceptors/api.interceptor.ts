import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LocalStorageKey, DEFAULT_STORAGE_CONFIG } from 'constants/storage.constants';
import { useStorage } from 'hooks/useLocalState';
import { useEffect } from 'react';
import { getRefreshToken } from '../api/auth.service';
import { baseInstance } from '../api/api-base.service';

interface InterceptorProps {
  children: JSX.Element;
}

export function ApiInterceptor({ children }: InterceptorProps): JSX.Element {
  const [token, setToken] = useStorage(
    LocalStorageKey.authToken,
    DEFAULT_STORAGE_CONFIG,
  );

  const createHeaderConfig = (config: InternalAxiosRequestConfig) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['X-Api-App-Id'] = import.meta.env.VITE_API_CLIENT_SECRET;
    if (token.access_token) {
      config.headers['Authorization'] = `Bearer ${token.access_token}`;
    }
  };

  const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    createHeaderConfig(config);  
    return config;
  };

  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  const requestInterceptor = baseInstance.interceptors.request.use(
    onRequest,
    onRequestError,
  );

  useEffect(() => {
    const onResponse = (response: AxiosResponse): AxiosResponse => {
      return response;
    };

    const onResponseError = async (
      error: AxiosError,
    ): Promise<AxiosError | undefined> => {
      if (error.response) {
        if (error.response.status === 410) {
          try {
            const { access_token } = await getRefreshToken(token.refresh_token);
            setToken({ ...token, access_token: access_token });
            return;
          } catch (err) {
            return Promise.reject(err);
          }
        }
      }
      return Promise.reject(error);
    };

    const responseInterceptor = baseInstance.interceptors.response.use(
      onResponse,
      onResponseError,
    );

    return () => {
      baseInstance.interceptors.request.eject(requestInterceptor);
      baseInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, setToken, token]);

  return children;
}
