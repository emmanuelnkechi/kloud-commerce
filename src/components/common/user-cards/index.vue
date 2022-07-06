<template>
  <div class="popup">
    <div class="popup-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modalHeader?: string;
}>();

</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  transition: all 0.35s ease-in;
  z-index: 8000;
  padding: 1rem;

  &-content {
    margin: 15vh 0;
  }
}
</style>
