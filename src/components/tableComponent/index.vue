<template>
  <div class="user">
    <div class="user-header grid grid-cols-2 mt-4 items-center">
      <div class="user-header__title">View All Users</div>
      <div class="justify-self-end">
        <button class="user-header__button" @click="createUserModal">
          Create New Users
        </button>
      </div>
    </div>

    <div class="user-search">
      <div class="search-grid grid grid-cols-2 mt-6 items-center bg-gray-100">
        <search-component />
        <table-pagination />
      </div>
    </div>

    <div class="user-listing">
      <listing-interface />
    </div>

    <div class="list-pagination">
      <table-pagination />
    </div>

    <create-user v-if="store.state.component === 'create-user'" />
    <edit-user v-if="store.state.component === 'edit-user'" />
    <deleteUser v-if="store.state.component === 'delete-user'" />
    <success-modal
      v-if="store.state.success"
      @closeModal="closeSuccessModal"
      content="You have successfully deleted this user "
    />
  </div>
</template>

<script lang="ts" setup>
import listingInterface from './listing-interface.vue';
import searchComponent from './search-component/index.vue';
import tablePagination from './table-pagination/index.vue';
import createUser from '../user/create-user/index.vue';
import editUser from '../user/edit-user/index.vue';
import deleteUser from '../user/delete-user/index.vue';
import store from '../../store/index';
import successModal from '../common/success-modal/index.vue';

const createUserModal = () => {
  store.commit('createUserModal');
};

const closeSuccessModal = () => {
  store.commit('setSuccess', false);
};
</script>

<style lang="scss" scoped>
.user {
  background: #ffffff;
  padding-bottom: 1.5rem;

  &-header {
    border: 1px solid #e1e5ee;
    padding: 0.8rem 1.2rem;
    background-color: #ffffff;

    &__title {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
    }

    &__button {
      background: #3399ff;
      border: 1px solid #3399ff;
      border-radius: 0.4rem;
      color: #ffffff;
      padding: 0.4rem 1rem;
    }
  }

  &-listing {
    padding: 0rem 1.2rem 1rem 1.2rem;
  }

  &-search {
    padding: 0.5rem 1.2rem;
  }

  .list-pagination {
    margin-left: auto;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .user-search {
      padding: 0.5rem;
      .search-grid {
        display: block !important;
      }
    }
  }
}
</style>
