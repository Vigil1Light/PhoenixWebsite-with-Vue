<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import NavbarVue from "./components/Layouts/Navbar.vue";
import BannerVue from "./components/Banner.vue";
import BannerVue2 from "./components/Banner2.vue";
import BannerVue3 from "./components/Banner3.vue";

const slides = [{slide: BannerVue3, id: "1"}, {slide: BannerVue, id: "2"}, {slide: BannerVue2, id: "3"}]

</script>

<template>
  <div class="w-full font-normal_font">
    <NavbarVue />
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000999">
      <Slide v-for="item in slides" :key="item.id">
        <component :is="item.slide" :key="item.id"></component>
      </Slide>
      <template #addons>
        <Navigation class="text-white"/>
        <Pagination />
    </template>
    </Carousel>
   
    <!-- <BannerVue3 />
    <BannerVue />
    <BannerVue2 /> -->
  </div>
</template>

<style>
.carousel__pagination {
  position: absolute;
  top: 545px;
  width: 100%;
  float: left;
  justify-content: start;
  padding-left: calc(50% - 478px)
}

.carousel__pagination-button::after {
  background: white !important;
  border-radius: 2px;
  width: 48px;
}

.carousel__pagination-button--active::after {
  background: #F02148 !important;
}
/* carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */

  
</style>
