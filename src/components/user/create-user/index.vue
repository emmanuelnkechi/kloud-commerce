<template>
  <div>
    <user-card>
      <template v-slot:content>
        <div class="create-user">
          <div class="create-user__header grid grid-cols-2">
            <div class="create-user__bold">Create New User(s)</div>
            <div
              class="create-user__close justify-self-end"
              @click="closePopup"
            >
              X
            </div>
          </div>
          <form>
            <div class="grid grid-cols-2 gap-7">
              <div class="flex flex-col gap-2">
                <label>FIRST NAME *</label>
                <input
                  class="create-user__input"
                  type="text"
                  placeholder="Enter first name"
                  v-model="firstName"
                  required
                />
              </div>
              <div class="flex flex-col gap-2">
                <label>LAST NAME</label>
                <input
                  class="create-user__input"
                  type="text"
                  placeholder="Enter last name"
                  v-model="lastName"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label>EMAIL *</label>
                <input
                  class="create-user__input"
                  type="email"
                  placeholder="Enter email"
                  v-model="email"
                  required
                />
              </div>

              <div class="flex flex-col gap-2">
                <label>PHONE NUMBER *</label>
                <input
                  class="create-user__input"
                  type="text"
                  placeholder="Enter phone number"
                  v-model="phone"
                  required
                />
              </div>
            </div>
            <div class="create-user__button">
              <button
                :class="!loading && !checkFormValidation ? 'opacity-30' : ''"
                :disabled="!checkFormValidation"
                @click.prevent="createUser"
              >
                {{ !loading ? 'Create User' : 'Loading......' }}
              </button>
            </div>
          </form>
        </div>
      </template>
    </user-card>
    <successModal
      v-if="success"
      @closeModal="closeSuccessModal"
      content="You have successfully added this user "
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import userCard from '../../common/user-cards/index.vue';
import store from '../../../store/index';
import successModal from '../../common/success-modal/index.vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const loading = ref(false);
const checkFormValidation = ref(false);
const success = ref(false);

const createUser = () => {
  if (checkFormValidation.value) {
    loading.value = true;
    const payload = {
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      phone: phone.value,
    };
    store.dispatch('createUser', payload);
    loading.value = false;
    success.value = true;
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
  }
};

watchEffect(() => {
  if (firstName.value && phone.value && email.value) {
    checkFormValidation.value = true;
  } else {
    checkFormValidation.value = false;
  }
});

const closePopup = () => {
  store.commit('setComponent', '');
};

const closeSuccessModal = () => {
  success.value = false;
};
</script>

<style lang="scss" scoped>
.create-user {
  width: 60vw;
  background-color: #ffffff;
  margin: 0 auto;
  color: #6a7078;

  &__header {
    border: 1px solid #e1e5ee;
    padding: 0.7rem 1rem;
  }
  &__bold {
    font-size: 1.2rem;
    font-weight: 500;
  }
  &__close {
    cursor: pointer;
  }
  form {
    padding: 5rem 8rem;
  }
  &__input {
    border-radius: 0.3rem;
  }

  &__button {
    display: flex;
    justify-content: end;
    margin-top: 6rem;
    button {
      background: #3399ff;
      border: 1px solid #3399ff;
      border-radius: 0.3rem;
      color: #ffffff;
      padding: 0.4rem 3rem;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .create-user {
    width: 90vw;

    form {
      padding: 1rem !important;
    }

    &__header {
      display: grid !important;
      grid-template-columns: 2fr 1fr !important;
    }
  }
}
</style>
