import { AxiosError } from 'axios';
import { onMounted, reactive, Ref, ref } from 'vue';

import { Artist } from '@/types/Artist';
import { Track } from '@/types/Track';

import fetchInformation from '../infrastructure/fetchInformation';

export const useFetchUserTops = (): {
  loading: Ref<boolean>;
  userTops: { artists: Array<Artist>; tracks: Array<Artist> };
} => {
  const loading = ref(true);
  const userTops = reactive<{ artists: Array<Artist>; tracks: Array<Track> }>({
    artists: [] as Array<Artist>,
    tracks: [] as Array<Track>,
  });
  onMounted(async () => {
    try {
      const { data: artists } = await fetchInformation.getUserTopsByType('artists');
      const { data: tracks } = await fetchInformation.getUserTopsByType('tracks', 5);
      userTops.artists = artists.items as Array<Artist>;
      userTops.tracks = tracks.items as Array<Track>;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    } finally {
      loading.value = false;
    }
  });
  return { loading, userTops };
};
