<template>
    <footer>
        <router-link to="/"><i class="fa-solid fa-house white-icon"></i></router-link>
        <router-link to="/transaction"><i class="fa-solid fa-chart-line white-icon"></i></router-link>
        <router-link to="/setting"><i class="fa-solid fa-gear white-icon"></i></router-link>
        <router-link to="/profile"><i class="fa-solid fa-user white-icon"></i></router-link>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #000;
    color: white;
    padding: 10px 0;
}
</style>