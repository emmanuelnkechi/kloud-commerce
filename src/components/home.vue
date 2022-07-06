<template>
  <div class="home">
      <app-header />
      <table-component />
  </div>
</template>

<script lang="ts" setup>
 import appHeader from './app-header.vue'
 import tableComponent from "./tableComponent/index.vue"
</script>

<style lang="scss" scoped>
  .home{
    padding: 2.5rem 3rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px){
    .home{
    padding: 1rem;
  }
}
</style>
