<template>
  <div class="header p-7 mt-2 flex flex-row items-center gap-8">
    <div class="header-logo relative -top-24 left-4">
      <img src="../assets/images/logo.svg" alt="logo" />
    </div>

    <div class="mt-4 header-section">
      <div class="header-title k-center k-header">KLOUD COMMERCE CHALLENGE</div>
      <!-- Start of carousel -->
      <div
        id="indicators-carousel"
        class="relative mt-2"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="overflow-hidden indicator relative rounded-lg sm:h-20">
          <!-- Item 1 -->
          <div
            class="duration-100 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item="active"
          >
            <h1 class="k-center">Have Fun</h1>
          </div>
          <!-- Item 2 -->
          <div
            class="duration-100 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <h1 class="k-center">Create</h1>
          </div>
          <!-- Item 3 -->
          <div
            class="hidden duration-100 ease-in-out absolute inset-0 transition-all transform"
            data-carousel-item=""
          >
            <h1 class="k-center">Explore</h1>
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
        >
          <button
            type="button"
            class="w-7 h-1 bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-7 h-1 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-7 h-1 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
      </div>
      <!-- End of carousel -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  background: #2a2a8f;
  color: #eff1f4;
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .p-7 {
    padding: 1rem !important;
  }
  .header {
    display: block;
    gap: 1rem;

    &-logo {
      width: 6rem;
      height: auto;
      top: -1.5rem !important;
    }
    &-title {
      font-size: 1rem;
      margin-bottom: 0rem;
    }
    &-section {
      margin-top: 0rem;
    }

    #indicators-carousel {
      margin-top: 2.5rem !important;
      margin-bottom: 4rem;
    }
    .indicator {
      overflow: visible !important;
    }
  }
}
</style>
