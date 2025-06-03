<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});

import ImageComponent from "./kits/ImageComponent.vue";

const images = [
  { src: "/swipper/gallery/gallery1.webp", alt: "Gallery 1", width: 800, height: 600 },
  { src: "/swipper/gallery/gallery2.webp", alt: "Gallery 2", width: 800, height: 600 },
  { src: "/swipper/gallery/gallery3.webp", alt: "Gallery 3", width: 800, height: 600 },
  { src: "/swipper/gallery/gallery4.webp", alt: "Gallery 4", width: 800, height: 600 },
];
</script>

<template>
  <section class="about">
    <h1>{{ title }}</h1>
    <div class="gallery">
      <ImageComponent
        v-for="(image, index) in images"
        :key="index"
        :alt="image.alt"
        :image="image.src"
      />
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding-bottom: 2rem;
}
</style>
