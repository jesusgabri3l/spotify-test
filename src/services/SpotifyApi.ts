import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import AuthSpotify from '../modules/auth/infrastructure/AuthSpotify';
import { useAuthStore } from '../store/auth/useAuthStore';
const apiURL = import.meta.env.VITE_SPOTIFY_API as string;

export const SpotifyApi = axios.create({
  baseURL: apiURL,
});

// Interceptor for setting auth bearer token
SpotifyApi.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const authStore = useAuthStore();
    config.headers = {
      Authorization: 'Bearer ' + authStore.getAccessToken,
      'Content-Type': 'application/json',
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Interceptor for refreshing access token
SpotifyApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const authStore = useAuthStore();
    if (
      error.response.data?.error?.status === 401 &&
      error.response.data?.error?.message === 'The access token expired'
    ) {
      if (!authStore.authInfo.refresh_token) {
        authStore.setAuthInfo({ access_token: '', refresh_token: '' });
        return Promise.reject(error);
      }
      const { data: authResponse } = await AuthSpotify.refreshToken();
      const { access_token } = authResponse;
      authStore.setAuthInfo({ access_token, refresh_token: '' });
    } else {
      return Promise.reject(error);
    }
  },
);

export default {
  URL,
  getCurrentUserInfo(endpoint = ''): Promise<AxiosResponse> {
    return SpotifyApi.get('me' + endpoint);
  },
};
