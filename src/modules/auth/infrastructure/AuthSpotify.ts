import axios, { AxiosResponse } from 'axios';
import generateRandomString from 'generate-random-string';
import querystring from 'query-string';

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

SpotifyAuthApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error) {
      console.log(error);
    }
  },
);

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
    const body: any = {
      code,
      redirect_uri,
      grant_type: 'authorization_code',
    };
    return SpotifyAuthApi.post('api/token', querystring.stringify(body), {
      headers: getHeaders(),
    });
  },
  refreshToken(): Promise<AxiosResponse> {
    const body: any = {
      refresh_token: 'refresh',
      grant_type: 'refresh_token',
    };
    return SpotifyAuthApi.post('api/token', querystring.stringify(body), {
      headers: getHeaders(),
    });
  },
};
