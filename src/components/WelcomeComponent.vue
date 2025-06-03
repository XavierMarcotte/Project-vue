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
  display: flex;
  align-items: center;
  background: url("/welcome_image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  position: relative;
  overflow: hidden;
}

.welcome-content {
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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

@media (max-width: 768px) {
  .welcome {
    height: 60vh;
    min-height: 350px;
    padding: 1rem;
  }

  .welcome h1 {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }

  .welcome_description {
    font-size: clamp(1rem, 4vw, 1.2rem);
  }

  .welcome-content {
    padding: 1rem;
  }
}

@media (max-width: 500px) {
  .welcome {
    height: 80vh;
    min-height: 400px;
  }

  .welcome h1 {
    font-size: clamp(1.5rem, 10vw, 2rem);
  }

  .welcome_description {
    font-size: clamp(1rem, 5vw, 1.1rem);
  }

  .welcome-content {
    padding: 0.5rem;
  }
}
</style>
