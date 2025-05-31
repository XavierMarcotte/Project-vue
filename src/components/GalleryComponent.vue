<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <section class="about">
        <h1>{{ title }}</h1>
    </section>
</template>

<style scoped>

</style>