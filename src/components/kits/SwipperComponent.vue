<script setup>
import ImageComponent from "./ImageComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const modules = [Navigation];
</script>

<template>
  <div ref="swiperRef" class="swiper-container">
    <swiper :navigation="true" :modules="modules" class="swiper" :loop="true">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <ImageComponent :alt="image.alt" :image="image.src" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 500px;
  min-width: 200px;
  height: 300px;
  margin: auto;
  position: relative;
}

.swiper {
  width: 100%;
  height: 100%;
  user-select: none;
}

.swiper-slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
}

.swiper-pagination {
  bottom: 10px;
}
</style>
