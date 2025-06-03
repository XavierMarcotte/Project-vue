<script setup>
import { ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import ImageComponent from "./ImageComponent.vue";

register();

const swiperRef = ref(null);

onMounted(() => {
  if (swiperRef.value) {
    new Swiper(swiperRef.value, {
      direction: "horizontal",
      loop: true,
      //Pagination peut être utile mais cela baisse la note d'accessibilité car trop petit
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }
});

defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div ref="swiperRef" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <ImageComponent :alt="image.alt" :image="image.src" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  max-width: 500px;
  min-width: 200px;
  height: 300px;
  margin: auto;
}
.swiper-slide {
  position: relative;
}
</style>
