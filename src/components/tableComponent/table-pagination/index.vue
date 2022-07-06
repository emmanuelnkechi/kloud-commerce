<template>
  <div class="pagination flex gap-5 items-center justify-end p-3">
    <div>
      <b>1</b>
      -
      <b>50</b>
      of
      <b>2000</b>
      Entries
    </div>
    <div class="pagination-pages">
      <div class="pagination-pages_button flex gap-1">
        <button class="bg-white p-2">&lt</button>
        <button class="bg-white p-2">1</button>
        <button class="bg-white p-2">2</button>
        <button class="bg-white p-2">3</button>
        <button class="bg-white p-2">&gt</button>
      </div>
    </div>
    <div>
      <select>
        <option selected><b>Rows:</b> 50</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.pagination {
  color: #8898AA;
  font-size: 0.9rem;
  font-weight: 400;
  &-pages {
    &_button { 
      border: 1px solid#E1E5EE !important;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .pagination {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>
