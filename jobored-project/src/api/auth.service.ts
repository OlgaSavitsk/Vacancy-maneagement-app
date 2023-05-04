import {
  AUTH_PATH,
  DEFAULT_AUTH_PARAMS,
  DEFAULT_AUTH_REFRESH_PARAMS,
  REFRESH_TOKEN_PATH,
} from 'constants/auth';
import { AuthResponse } from 'core/models/auth.model';
import { getRequest, baseInstance } from './api-base.service';

export const getAuthToken = (): Promise<AuthResponse> => {
  return getRequest<AuthResponse>(
    baseInstance.get<AuthResponse>(AUTH_PATH, {
      params: {
        ...DEFAULT_AUTH_PARAMS,
      },
    }),
  );
};

export const getRefreshToken = (refresh_token: string): Promise<AuthResponse> => {
  return getRequest(
    baseInstance.get(REFRESH_TOKEN_PATH, {
      params: {
        refresh_token: refresh_token,
        ...DEFAULT_AUTH_REFRESH_PARAMS,
      },
    }),
  );
};
