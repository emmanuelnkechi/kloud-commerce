<template>
  <div>
    <!-- table start -->
    <div class="mt-3 relative overflow-x-auto shadow-md">
      <table
        class="w-full border-collapse border border-slate-300 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-5">S/N</th>
            <th scope="col" class="px-6 py-5">NAME</th>
            <th scope="col" class="px-6 py-5">EMAIL</th>
            <th scope="col" class="px-6 py-5">PHONE NUMBER</th>
            <th scope="col" class="px-6 py-5">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b k-fs_base" v-for="(user, i) in store.state.user">
            <td class="px-6 py-4">{{ i + 1 }}</td>
            <td class="px-0 py-4 flex gap-4 items-center">
              <div
                class="w-7 h-7 rounded-full k-bg-secondary flex items-center justify-center text-white"
              >
                {{ user?.name.split(' ')[0][0]
                }}{{ user?.name.split(' ')[1][0] }}
              </div>
              <div class="k-color-secondary">{{ user?.name }}</div>
            </td>
            <td class="px-6 py-4">{{ user?.email }}</td>
            <td class="px-6 py-4">{{ user?.phone }}</td>
            <td class="px-6 py-4 text-right flex gap-2">
              <div
                @click="editUserModal(user?.id)"
                class="k-bg-link p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <img src="../../../assets/icons/edit-icon.svg" alt="" />
              </div>
              <div
                @click="deleteUserModal(user?.id)"
                class="k-bg-link p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <img src="../../../assets/icons/delete-icon.svg" alt="" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- table end -->
    </div>
    <delete-user/>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import store from '../../../store/index';

onBeforeMount(() => {
  store.dispatch('listUser');
});

const editUserModal = (id) => {
  store.commit('setUserId', id);
  store.commit('editUserModal');
};

const deleteUserModal = (id) => {
  store.commit('setUserId', id);
  store.commit('deleteUserModal');
};


</script>

<style lang="scss" scoped></style>
