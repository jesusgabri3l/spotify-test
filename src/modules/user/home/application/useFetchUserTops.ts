import { AxiosError } from 'axios';
import { onErrorCaptured, onMounted, reactive, Ref, ref } from 'vue';

import { Artist } from '@/types/Artist';
import { Track } from '@/types/Track';

import fetchInformation from '../infrastructure/fetchInformation';

// ---- Composable -----
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
    const { data: artists } = await fetchInformation.getUserTopsByType('artists');
    const { data: tracks } = await fetchInformation.getUserTopsByType('tracks', 5);
    userTops.artists = artists.items as Array<Artist>;
    userTops.tracks = tracks.items as Array<Track>;
    loading.value = false;
  });

  return { loading, userTops };
};
