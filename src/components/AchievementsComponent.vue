<script setup>
import SwipperComponent from "./kits/SwipperComponent.vue";

const birdsImages = [
  {
    src: "/swipper/birds/bird1.webp",
    alt: "Bird 1",
  },
  {
    src: "/swipper/birds/bird2.webp",
    alt: "Bird 2",
  },
  {
    src: "/swipper/birds/bird3.webp",
    alt: "Bird 3",
  },
];

const landscapeImages = [
  { src: "/swipper/landscape/landscape1.webp", alt: "Landscape 1" },
  { src: "/swipper/landscape/landscape2.webp", alt: "Landscape 2" },
  { src: "/swipper/landscape/landscape3.webp", alt: "Landscape 3" },
];

const mariageImages = [
  { src: "/swipper/mariage/mariage1.webp", alt: "Mariage 1" },
  { src: "/swipper/mariage/mariage2.webp", alt: "Mariage 2" },
  { src: "/swipper/mariage/mariage3.webp", alt: "Mariage 3" },
];

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="achievements">
    <h1 class="achievements_title">{{ title }}</h1>
    <div class="achievements_swipper">
      <SwipperComponent :images="birdsImages" />
      <SwipperComponent :images="landscapeImages" />
      <SwipperComponent :images="mariageImages" />
    </div>
  </section>
</template>

<style scoped>
.achievements {
  padding-bottom: 2rem;
}
.achievements_swipper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 900px) {
  .achievements_swipper {
    flex-direction: column;
  }
  h1 {
    text-align: center;
  }
}
</style>
