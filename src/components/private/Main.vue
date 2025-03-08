<template>
    <header-component @open-scan-page="openScanPage" @open-notification-page="openNotificationPage" />
    <div class="main-content">
        <router-view />
    </div>
    <footer-component />
</template>

<script>
import FooterComponent from './Section/Footer.vue';
import HeaderComponent from './Section/Header.vue';

export default {
    name: 'MainComponent',
    components: {
        FooterComponent,
        HeaderComponent,
    }
}
</script>

<style scoped>
.main-content {
    margin-bottom: 30px;
    padding-bottom: 30px; /* Adjust based on footer height */
}
</style>