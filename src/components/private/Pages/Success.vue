<template>
    <div class="success-page">
        <h2>Successful transaction</h2>
        <div v-for="contact in contacts" :key="contact.id" class="contact-item">
            <span>{{ contact.name }}</span>
            <span>{{ amount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessComponent',
    props: ['amount', 'contacts']
};
</script>

<style scoped>
.success-page {
    text-align: center;
    margin-top: 20px;
}
.contact-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
