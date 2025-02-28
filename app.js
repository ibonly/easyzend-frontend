import Home from './component/home.js';

const app = Vue.createApp({
    data() {
        return {
            message: "Hello"
        }
    },
    components: {
        Home,
    } 
})

app.mount('#app');