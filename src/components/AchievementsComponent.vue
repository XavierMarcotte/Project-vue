<script setup>

import SwipperComponent from './kits/SwipperComponent.vue'

const birdsImages = [
    { 
        src: '/swipper/birds/bird1.jpg', 
        alt: 'Bird 1',
        width: 800,
        height: 600
    },
    { 
        src: '/swipper/birds/bird2.jpg', 
        alt: 'Bird 2',
        width: 800,
        height: 600
    },
    { 
        src: '/swipper/birds/bird3.jpg', 
        alt: 'Bird 3',
        width: 800,
        height: 600
    }
]

const landscapeImages = [
    { src: '/swipper/landscape/landscape1.jpg', alt: 'Landscape 1', width: 800, height: 600 },
    { src: '/swipper/landscape/landscape2.jpg', alt: 'Landscape 2', width: 800, height: 600 },
    { src: '/swipper/landscape/landscape3.jpg', alt: 'Landscape 3', width: 800, height: 600 }
]

const mariageImages = [
    { src: '/swipper/mariage/mariage1.jpg', alt: 'Mariage 1', width: 800, height: 600 },
    { src: '/swipper/mariage/mariage2.jpg', alt: 'Mariage 2', width: 800, height: 600 },
    { src: '/swipper/mariage/mariage3.jpg', alt: 'Mariage 3', width: 800, height: 600 }
]

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <section class="achievements">
        <h1 class="achievements_title">{{ title }}</h1>
        <div class="achievements_swipper">
            <SwipperComponent :images="birdsImages"/>
            <SwipperComponent :images="landscapeImages"/>
            <SwipperComponent :images="mariageImages"/>
        </div>
    </section>
</template>

<style scoped>
    .achievements {
        padding-bottom: 2rem;
    }
    .achievements_swipper{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    .achievements_title{
    margin-bottom: 2rem;
    }

    @media (max-width: 900px) {
        .achievements_swipper{
            flex-direction: column;
        }
        h1 {
            text-align: center;
        }
    }
</style>