<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import AchievementsComponent from './components/AchievementsComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import ClientsComponent from './components/ClientsComponent.vue'
import GalleryComponent from './components/GalleryComponent.vue'

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <WelcomeComponent title="Welcome to our website"/>
    <AchievementsComponent title="Our achievements"/>
    <AboutComponent title="About us"/>
    <ServicesComponent title="Our Services"/>
    <ClientsComponent title="What our clients say about us"/>
    <GalleryComponent title="Our Gallery"/>
  </main>
</template>

<style scoped>

</style>
