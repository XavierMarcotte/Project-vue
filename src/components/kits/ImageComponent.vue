<script setup>
defineProps({
    alt: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="image" :alt="alt">
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>
