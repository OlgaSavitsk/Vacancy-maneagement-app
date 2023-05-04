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

export const AUTH_PATH = '/2.0/oauth2/password';
export const REFRESH_TOKEN_PATH = '/2.0/oauth2/refresh_token';
