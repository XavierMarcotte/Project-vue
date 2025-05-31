<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    },
})

</script>

<template>
    <div class="review-card">
        <div class="review-header">
            <img src="/profil.jpg" :alt="name" class="client-photo">
            <div class="client-info">
                <h2>{{name}}</h2>
                <div class="stars">{{stars}} ★</div>
            </div>
        </div>
        <p class="review-text">{{review}}</p>
    </div>

</template>

<style scoped>
.review-card {
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.review-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
}

.client-photo {
    width: 90px;
    height: 60px;
    border-radius: 50%;
}
.client-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
}
.client-info h2 {
    margin: 0;
    color: #333;
    font-size: 1.3rem;
}

.stars {
    color: #ffd700;
    font-size: 1.2rem;
    margin: 0.5rem 0;
}

.review-text {
    color: #666;
    line-height: 1.6;
    font-size: 1rem;
}

@media (max-width: 1444px) {
    .client-info {
      flex-direction: column;
    }
}
@media (max-width: 1405px) {
    .client-info {
    }
}

@media (max-width: 1000px) {
    .client-info{
       flex-direction: column;
    }
}
@media (max-width: 893px) {
    .client-info{
        flex-direction: row;
        gap: 1rem;
    }
}


@media (max-width: 500px) {
    .client-info{
       flex-direction: column;
       gap: 0rem;
    }
}

</style>