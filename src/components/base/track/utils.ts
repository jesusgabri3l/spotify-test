import { Artist } from '@/types/Artist';

export const artistsConcataned = (artists: Array<Artist>) => {
  return (
    artists.reduce(
      (acc: string, artist, index) =>
        (acc = acc + (index === 0 ? artist.name : `, ${artist.name}`)),
      '',
    ) || ''
  );
};

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const millisToMinutesAndSeconds = (duration_ms: number) => {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = Math.floor((duration_ms % 60000) / 1000);

  return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${padTo2Digits(seconds)}`;
};
