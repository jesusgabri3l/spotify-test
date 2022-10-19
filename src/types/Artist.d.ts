export interface Image {
  height?: number;
  url?: string;
  width?: number;
}
export interface Artist {
  external_urls?: {
    spotify?: string;
  };
  followers?: {
    href?: any;
    total?: number;
  };
  genres?: Array<string>;
  href?: string;
  id?: string;
  images?: Array<Image>;
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
