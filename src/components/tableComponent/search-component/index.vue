<template>
  <div class="user-search flex p-3">
    <div class="user-search-img h-9 w-9 bg-white flex items-center justify-center">
      <img src="../../../assets/icons/search-icon.svg" />
    </div>
    <input type="text" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.user-search {
  &-img{
    cursor: pointer;
  }
  input{
    background-color: transparent !important;
    border: none;
    outline: none;
  }
  input:active{
    border: none;
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .user-search {
    width: 100%;
  input{
    background-color: #ffffff !important;
       width: 100%;
  }
  }
}
</style>
