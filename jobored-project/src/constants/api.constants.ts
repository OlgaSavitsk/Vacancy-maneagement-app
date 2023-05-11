export const DEFAULT_AUTH_PARAMS = {
  login: import.meta.env.VITE_API_LOGIN,
  password: import.meta.env.VITE_API_PASSWORD,
  client_id: import.meta.env.VITE_API_CLIENT_ID,
  client_secret: import.meta.env.VITE_API_CLIENT_SECRET,
  hr: import.meta.env.VITE_HR,
};

export const DEFAULT_AUTH_REFRESH_PARAMS = {
  client_id: DEFAULT_AUTH_PARAMS.client_id,
  client_secret: DEFAULT_AUTH_PARAMS.client_secret,
};

export const AUTH_PATH = 'oauth2/password';
export const REFRESH_TOKEN_PATH = 'oauth2/refresh_token';

export enum VACANCY_PARAMS {
  published = 1,
  keyword,
  payment_from,
  payment_to,
  catalogues = 33,
}

export const VACANCY_API_PATH = 'vacancies/'
export const INDUSTRY_API_PATH = 'catalogues/'
