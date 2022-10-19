import axios, { AxiosResponse } from 'axios';
import generateRandomString from 'generate-random-string';
import querystring from 'query-string';

import { useAuthStore } from '../../../store/auth/useAuthStore';
// All the values required for the Auth proccess
const SpotifyAuthURI = import.meta.env.VITE_SPOTIFY_AUTH_URI as string;
const clientID = import.meta.env.VITE_SPOTIFY_AUTH_CLIENT_ID as string;
const clientSecret = import.meta.env.VITE_SPOTIFY_AUTH_CLIENT_SECRET as string;
const scope = import.meta.env.VITE_SPOTIFY_AUTH_SCOPES as string;
const redirect_uri = import.meta.env.VITE_SPOTIFY_AUTH_REDIRECT_URI as string;
const state: string = generateRandomString('16', true);

function getHeaders() {
  return {
    Authorization: 'Basic ' + btoa(clientID + ':' + clientSecret),
    'Content-Type': 'application/x-www-form-urlencoded',
  };
}

export const SpotifyAuthApi = axios.create({
  baseURL: SpotifyAuthURI,
});

export default {
  URL,
  // Method for redirecting to the auth URL spotify
  redirectToSpotifyAuth(): void {
    window.location.replace(
      SpotifyAuthURI +
        'authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: clientID,
          scope,
          redirect_uri,
          state,
        }),
    );
  },
  // The code param is get on the callback view, when is redirected
  getAccessTokenByCode(code: string): Promise<AxiosResponse> {
    const body: { code: string; redirect_uri: string; grant_type: string } = {
      code,
      redirect_uri,
      grant_type: 'authorization_code',
    };
    return SpotifyAuthApi.post('api/token', querystring.stringify(body), {
      headers: getHeaders(),
    });
  },
  // To refresh the token, this triggers when a call to the SpotifyAPI fails with 403
  refreshToken(): Promise<AxiosResponse> {
    const authStore = useAuthStore();
    const body: { refresh_token: string; grant_type: string } = {
      refresh_token: authStore.getRefreshToken,
      grant_type: 'refresh_token',
    };
    return SpotifyAuthApi.post('api/token', querystring.stringify(body), {
      headers: getHeaders(),
    });
  },
};
