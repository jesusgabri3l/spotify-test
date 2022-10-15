import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { User } from '../../types/User';

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<User>({});
  //Getters
  const getUser = computed(() => user.value);
  // Actions
  const setUser = (userPayload: User): void => {
    user.value = userPayload;
  };

  return { user, getUser, setUser };
});
