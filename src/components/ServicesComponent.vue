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
        <div class="services-grid">
            <div class="service-card">
                <h2>Portrait Photography</h2>
                <p>Capture your unique personality and style through professional portraits that showcase your best features.</p>
            </div>
            <div class="service-card">
                <h2>Event Photography</h2>
                <p>Document your special moments with high-quality event photography that preserves memories forever.</p>
            </div>
            <div class="service-card">
                <h2>Commercial Photography</h2>
                <p>Create professional images for your business needs, from product shots to corporate headshots.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    margin: 2rem auto 0 auto;
    padding-bottom: 2rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.service-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}

.service-card h2 {
    color: #333;
    margin-bottom: 1rem;
}

.service-card p {
    color: #666;
    line-height: 1.6;
}
</style>
