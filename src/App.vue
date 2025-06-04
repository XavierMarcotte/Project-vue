<script setup>
import WelcomeComponent from "./components/WelcomeComponent.vue";
import AchievementsComponent from "./components/AchievementsComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ServicesComponent from "./components/ServicesComponent.vue";
import ClientsComponent from "./components/ClientsComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
// import AvailabilityComponent from "./components/AvailabilityComponent.vue";
import CalendarComponent from "./components/kits/CalendarComponent.vue";
</script>

<template>
  <main>
    <WelcomeComponent title="Welcome to our website" />
    <AchievementsComponent title="Our achievements" />
    <AboutComponent title="About us" />
    <ServicesComponent title="Our Services" />
    <ClientsComponent title="What our clients say about us" />
    <GalleryComponent title="Our Gallery" />
    <CalendarComponent />
  </main>
</template>

<style scoped></style>
