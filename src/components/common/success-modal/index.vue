<template>
  <user-card>
    <template v-slot:content>
      <div class="success-modal">
        <div class="success-modal__close" @click="closeModal">x</div>
        <div class="success_modal__content mt-5">
          <div class="flex justify-center">
            <img src="../../../assets/icons/success.svg" alt="success-icon" />
          </div>

          <h5 class="success-modal__header">Successful</h5>
          <p>{{ content }}</p>
          <div class="gap-4 mt-6">
            <button @click="viewUser" class="success-modal__view p-4">
              View details
            </button>
          </div>
        </div>
      </div>
    </template>
  </user-card>
</template>

<script lang="ts" setup>
import userCard from '../user-cards/index.vue';
import store from '../../../store';

const props = defineProps<{
  content: string;
}>();

const emit = defineEmits<{
  (e: 'close-modal'): void;
}>();

const closeModal = () => {
  return emit('close-modal');
};

const viewUser = () => {
  store.commit('setComponent', '');
};
</script>

<style lang="scss" scoped>
.success-modal {
  text-align: center;
  width: 30vw;
  background-color: #ffffff;
  margin: 0 auto;
  color: #6a7078;
  padding: 1rem 1rem 3rem 1rem;

  &__content {
    padding: 4rem;
  }
  &__close {
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    cursor: pointer;
  }

  &__header {
    text-align: center;
    font-size: 1.5rem;
    color: #061a48;
  }

  &__view {
    background: #f5faff;
    color: #3399ff;
    border-radius: 0.3rem;
    padding: 0.5rem 5rem;
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
.success-modal {
  width: 70vw;

  &__view {
    padding: 0.5rem 3rem;
}
}

}
</style>
