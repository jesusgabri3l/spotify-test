import { Artist, Image } from './Artist';

export interface Album {
  album_type?: string;
  artists?: Array<Artist>;
  available_markets?: Array<string>;
  external_urls?: {
    spotify?: string;
  };
  href?: string;
  id?: string;
  images?: Array<Image>;
  name?: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
}
