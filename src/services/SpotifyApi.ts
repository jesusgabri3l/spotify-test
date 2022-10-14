import axios, { AxiosResponse } from 'axios';

import { useAuthStore } from '../store/auth/useAuthStore';
const apiURL: string = import.meta.env.VITE_SPOTIFY_API as string;

export function getHeaders() {
  const authStore = useAuthStore();
  return {
    Authorization: 'Bearer ' + authStore.getAccessToken,
    'Content-Type': 'application/json',
  };
}

export const SpotifyApi = axios.create({
  baseURL: apiURL,
});

export default {
  URL,
  getCurrentUserInfo(endpoint = ''): Promise<AxiosResponse> {
    return SpotifyApi.get('me' + endpoint, { headers: getHeaders() });
  },
};
