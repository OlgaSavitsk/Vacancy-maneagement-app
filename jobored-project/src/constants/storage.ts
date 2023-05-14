import { Favorites } from "core/models/vacancy.model";

export enum LocalStorageKey {
  authToken = 'auth_token_jobored',
  favoritesId = 'favorites',
}

export const DEFAULT_STORAGE_CONFIG: StorageConfig = {
  access_token: '',
  refresh_token: '',
};

interface StorageConfig {
  access_token: string;
  refresh_token: string;
}

export const DEFAULT_FAVORITES: Favorites = {
  ids: [],
};
