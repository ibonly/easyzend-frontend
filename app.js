import Home from './component/Pages/home.js';
import MainComponent from './component/Main/phoneNumber.js';

const template = `
    <home v-if="showAnotherComponent"></home>
    <main-component v-else></main-component>
`;

const app = Vue.createApp({
    template: template,
    data() {
        return {
            showAnotherComponent: false
        }
    },
    components: {
        Home,
        MainComponent,
    } 
})

app.mount('#app');