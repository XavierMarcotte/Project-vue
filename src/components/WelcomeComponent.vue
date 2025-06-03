<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="welcome">
    <img
      :src="'/welcome_image.webp'"
      alt="Photography background"
      class="welcome-bg"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="1920"
      height="1080"
      style="aspect-ratio: 16/9"
    />
    <div class="welcome-content">
      <h1>{{ title }}</h1>
      <p class="welcome_description">Welcome to our professional photography services</p>
      <button class="welcome_button">Discover More</button>
    </div>
  </section>
</template>

<style scoped>
.welcome {
  min-height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.welcome-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.welcome-content {
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
}

.welcome h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.welcome_description {
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.welcome_button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #004526;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.welcome_button:hover {
  background-color: #006435;
  transform: translateY(-2px);
}
</style>
