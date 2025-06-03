<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p class="team-description">
      Our team of passionate photographers brings a wealth of experience and creativity to every
      project. With expertise spanning decades in the industry, we're dedicated to capturing moments
      that matter. Each team member brings unique skills and a deep love for photography, ensuring
      that every photograph tells a story. We work collaboratively to deliver exceptional results
      that exceed our clients' expectations.
    </p>
  </div>
</template>

<style scoped>
.team-description {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: auto;
}
</style>
