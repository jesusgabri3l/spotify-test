import { AxiosError } from 'axios';
import { onMounted, ref, watch } from 'vue';

import SpotifyApi from '../services/SpotifyApi';
import { useAuthStore } from '../store/auth/useAuthStore';
import { useUserStore } from '../store/user/useUserStore';

export const useFetchUser = () => {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  const loading = ref(true);

  const getUserInformation = async () => {
    // In case the token expired and there is no more refresh token, but is already a user in the userStore(a loggin proccess successfully before), just refresh the page
    if (userStore.getUser.id && !authStore.getAccessToken && !authStore.getRefreshToken)
      window.location.reload();
    // If user does no exists but it has already a token
    if (!userStore.getUser.id && authStore.getAccessToken) {
      try {
        const { data: userResponse } = await SpotifyApi.getCurrentUserInfo();
        const { display_name, id, images } = userResponse;
        userStore.setUser({ display_name, id, image: images[0].url });
      } catch (err) {
        const error = err as AxiosError;
        throw new Error(error.message);
      } finally {
        loading.value = false;
      }
    } else loading.value = false;
  };
  // To be watching if the token changed when refreshToken or logout
  watch(
    () => authStore.authInfo.access_token,
    () => getUserInformation(),
  );
  onMounted(() => getUserInformation());

  return { loading };
};
