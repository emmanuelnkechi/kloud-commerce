<template>
  <div>
    <user-card>
      <template v-slot:content>
        <div class="create-user">
          <div class="create-user__header grid grid-cols-2">
            <div class="create-user__bold">
              Edit User - <span>{{singleUser.name}}</span>
            </div>
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
                  :value="
                    singleUser.name &&
                    singleUser.name.substring(0, singleUser.name.indexOf(' '))
                  "
                  @input="(e) => handleValue(e, 'firstName')"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label>LAST NAME</label>
                <input
                  class="create-user__input"
                  type="text"
                  placeholder="Enter last name"
                  :value="
                    singleUser.name &&
                    singleUser.name
                      .substring(singleUser.name.lastIndexOf(' '))
                      .trim()
                  "
                  @input="(e) => handleValue(e, 'lastName')"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label>EMAIL *</label>
                <input
                  class="create-user__input"
                  type="email"
                  placeholder="Enter email"
                  :value="singleUser.email"
                  @input="(e) => handleValue(e, 'email')"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label>PHONE NUMBER *</label>
                <input
                  class="create-user__input"
                  type="text"
                  placeholder="Enter phone number"
                  :value="singleUser.phone"
                  @input="(e) => handleValue(e, 'phone')"
                />
              </div>
            </div>
            <div class="create-user__button flex justify-end gap-3">
              <button @click="deleteUser" class="create-user__delete">
                Delete User
              </button>
              <button
                :class="
                  !loading && !checkFormValidation
                    ? 'opacity-30 create-user__save'
                    : 'create-user__save'
                "
                :disabled="!checkFormValidation"
                @click.prevent="updateUser"
              >
                {{ !loading ? 'Save Changes' : 'Loading......' }}
              </button>
            </div>
          </form>
        </div>
      </template>
    </user-card>
    <successModal
      v-if="success"
      @closeModal="closeSuccessModal"
      content="You have successfully updated the user details "
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watchEffect,
  onMounted,
  onBeforeMount,
  computed,
  reactive,
} from 'vue';
import userCard from '../../common/user-cards/index.vue';
import store from '../../../store/index';
import successModal from '../../common/success-modal/index.vue';

onBeforeMount(() => {
  store.dispatch('getSingleUser');
});

const singleUser: any = computed(
  () => Object.keys(store.state.singleUser).length > 0 && store.state.singleUser
);

const userInfo = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
});

const loading = ref(false);
const checkFormValidation = ref(true);
const success = ref(false);

const handleValue = (e, name) => {
  userInfo[name] = e.target.value;

  if (
    userInfo.firstName.length === 0 ||
    userInfo.phone.length === 0 ||
    userInfo.email.length === 0
  ) {
    checkFormValidation.value = false;
  } else {
    checkFormValidation.value = true;
  }
};

const updateUser = () => {
  if (checkFormValidation.value) {
    loading.value = true;
    const payload = {
      name: `${userInfo.firstName} ${userInfo.lastName}`,
      email: userInfo.email,
      phone: userInfo.phone,
    };
    store.dispatch('updateUser', payload);
    loading.value = false;
    success.value = true;
    userInfo.firstName = '';
    userInfo.lastName = '';
    userInfo.email = '';
    userInfo.phone = '';
  }
};

const deleteUser = () => {
  store.dispatch('deleteUser');
  store.commit('setComponent', '');
};
const name = !!singleUser.value.name && singleUser.value.name.split(' ');
userInfo.firstName = name[0];
userInfo.lastName = name[1];
userInfo.email = !!singleUser.value.email && singleUser.value.email;
userInfo.phone = !!singleUser.value.phone && singleUser.value.phone;

watchEffect(() => {});

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
    margin-top: 6rem;
    button {
      border-radius: 0.3rem;
      padding: 0.4rem 3rem;
    }
  }
  &__delete {
    color: #ff5f58;
    border: 1px solid #ff5f58;
  }
  &__save {
    background: #3399ff;
    border: 1px solid #3399ff;
    color: #ffffff;
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
    &__button {
      padding: 0.4rem 2rem;
    }
  }
}
</style>
