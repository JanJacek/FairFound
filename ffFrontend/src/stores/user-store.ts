import { defineStore } from 'pinia';
import { User, UserLoginData, UserRegisterData } from 'src/types';
import { api } from 'src/boot/axios';
import { AxiosResponse } from 'axios';
interface UserState {
  user: User;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    const userInLocalStorage = localStorage.getItem('user');
    if (userInLocalStorage) {
      return {
        user: JSON.parse(userInLocalStorage),
      };
    }

    return {
      user: {} as User,
    };
  },
  getters: {},
  actions: {
    async login(user: UserLoginData) {
      return api
        .post('/login', user)
        .then((response: AxiosResponse<{ user: User; token: string }>) => {
          const userApi = response.data.user;
          const token = response.data.token;
          localStorage.setItem('user', JSON.stringify(userApi));
          localStorage.setItem('token', token);
          this.user = userApi;
        })
        .catch((err) => {
          throw err;
        });
    },

    async register(user: UserRegisterData) {
      return api
        .post('/register', user)
        .then((response: AxiosResponse<{ user: User; token: string }>) => {
          const userApi = response.data.user;
          const token = response.data.token;
          // localstorage
          localStorage.setItem('user', JSON.stringify(userApi));
          localStorage.setItem('token', token);
          // state
          this.user = userApi;
        })
        .catch((err) => {
          throw err;
        });
    },

    async logout() {
      return api
        .post('/logout')
        .then(() => {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.user = {} as User;
        })
        .catch((err) => {
          throw err;
        });
    },

    async searchUsers(query: string) {
      try {
        const response = await api.get('/search/users', { params: { query } });
        return response.data;
      } catch (err) {
        throw err;
      }
    },

    updateUser(user: User) {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    },
    async updateName(name: string) {
      try {
        const response = await api.put('/settings/user', { name });
        this.updateUser(response.data.user);
      } catch (err) {
        throw err;
      }
    },
  },
});
