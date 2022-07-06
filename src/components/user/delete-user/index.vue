<template>
  <div>
    <user-card>
      <template v-slot:content>
        <div class="delete-user">
          <h5 class="delete-user__header">
            Are you sure you want to Delete User
          </h5>
          <div class="justify-center flex gap-4 mt-6">
            <button @click="deleteUser" class="delete-user__delete p-4">
              Yes
            </button>
            <button @click="closePopup" class="delete-user__cancel">
              No, Cancel
            </button>
          </div>
        </div>
      </template>
    </user-card>
  </div>
</template>

<script lang="ts" setup>
import userCard from '../../common/user-cards/index.vue';
import store from '../../../store/index';

const closePopup = () => {
  store.commit('setComponent', '');
};

const deleteUser = () => {
  store.dispatch('deleteUser');
  store.commit('setComponent', '');
};
</script>

<style lang="scss" scoped>
.delete-user {
  width: 30vw;
  background-color: #ffffff;
  margin: 0 auto;
  color: #6a7078;
  padding: 4rem;

  &__header {
    text-align: center;
    font-size: 1.5rem;
  }

  &__delete {
    background: #3399ff;
    color: #ffffff;
    border-radius: 0.3rem;
  }
  &__cancel {
    background: transparent;
    color: #c2c9d1;
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .delete-user {
    width: 90vw;
  }
}
</style>
