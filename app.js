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
            showAnotherComponent: JSON.parse(localStorage.getItem('showAnotherComponent')) || false
        }
    },
    mounted() {
        window.addEventListener('storage', this.handleStorageChange);
    },
    beforeUnmount() {
        window.removeEventListener('storage', this.handleStorageChange);
    },
    methods: {
        handleStorageChange(event) {
            if (event.key === 'showAnotherComponent') {
                this.showAnotherComponent = JSON.parse(event.newValue);
            }
        }
    },
    components: {
        Home,
        MainComponent,
    } 
})

app.mount('#app');