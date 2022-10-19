import { AxiosResponse } from 'axios';

import { SpotifyApi } from '@/services/SpotifyApi';

export default {
  getUserTopsByType(type = 'artists', limit = 8): Promise<AxiosResponse> {
    return SpotifyApi.get(`me/top/${type}?limit=${limit}&time_range=short_term`);
  },
};
