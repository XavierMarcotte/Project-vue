<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})

import ReviewCard from './kits/ReviewCard.vue'

</script>

<template>
    <section class="clients-section">
        <h1>{{ title }}</h1>
        <div class="reviews-grid">
            <ReviewCard name="Emma Roberts" review="Their portrait photography is exceptional! The photographer made me feel at ease and captured my personality in a way that's truly unique. I'll definitely be coming back for more sessions!" stars="4"/>
            <ReviewCard name="James Wilson" review="The team was incredibly professional and creative. They captured every moment of our corporate event perfectly and provided us with amazing photos that we'll cherish forever." stars="5"/>
            <ReviewCard name="Sarah Johnson" review="Working with this photography team was an absolute pleasure! They captured our wedding day perfectly and made us feel comfortable throughout the entire process. The final photos exceeded our expectations!" stars="4,5"/>
            <ReviewCard name="Michael Brown" review="The team was incredibly professional and creative. They captured every moment of our corporate event perfectly and provided us with amazing photos that we'll cherish forever." stars="5"/>
        </div>
    </section>
</template>

<style scoped>
.clients-section {
    margin: 0 auto 2rem auto;
}


.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
}


</style>