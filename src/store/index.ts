import { createStore } from 'vuex';
import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/HttpClient';
import { User } from '@/model/index.interface';

export default createStore({
  state: {
    component: '',
    deleteConfirmation: false,
    user: [],
    singleUser: {},
    userId: 0,
    success: false,
  },
  getters: {},
  mutations: {
    setComponent(state, payload) {
      state.component = payload;
    },
    createUserModal(state) {
      state.component = 'create-user';
    },
    editUserModal(state) {
      state.component = 'edit-user';
    },
    deleteUserModal(state) {
      state.component = 'delete-user';
    },
    setDeleteConfirmation(state, payload) {
      state.deleteConfirmation = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setSingleUser(state, payload) {
      state.singleUser = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },
  },
  actions: {
    async listUser({ commit }) {
      try {
        const { data } = await apiGet('/');
        commit('setUser', data);
      } catch (err) {
        console.error(err);
      }
    },
    async createUser({ commit, dispatch }, payload: User) {
      try {
        await apiPost('/', payload);
        dispatch('listUser');
      } catch (err) {
        console.error(err);
      }
    },
    async getSingleUser({ state, commit }) {
      try {
        const { data } = await apiGet(`/${state.userId}`);
        commit('setSingleUser', data);
      } catch (err) {
        console.error(err);
      }
    },
    async updateUser({ dispatch, state }, payload) {
      try {
        await apiPut(`/${state.userId}`, payload);
        dispatch('listUser');
      } catch (err) {
        console.error(err);
      }
    },
    async deleteUser({ dispatch, commit, state }) {
      try {
        await apiDelete(`/${state.userId}`);
        commit('setSuccess', true);
        dispatch('listUser');
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {},
});
