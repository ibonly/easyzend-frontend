<template>
  <MainComponent v-if="showAnotherComponent" msg="Welcome to Your Vue.js App"/>
  <LoginComponent msg="Welcome to Login Vue.js App" v-else/>
</template>

<script>
import LoginComponent from './components/main/Login.vue'
import MainComponent from './components/private/Main.vue'

export default {
  name: 'App',
  components: {
    MainComponent,
    LoginComponent
  },
  data: () => {
    let showAnotherComponent = false;
    try {
      if (typeof localStorage !== 'undefined') {
        showAnotherComponent = JSON.parse(localStorage.getItem('showAnotherComponent')) || false;
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }
    return {
      showAnotherComponent
    }
  },
  mounted() {
    try {
      window.addEventListener('storage', this.handleStorageChange);
    } catch (e) {
      console.error('Error adding storage event listener:', e);
    }
  },
  beforeUnmount() {
    try {
      window.removeEventListener('storage', this.handleStorageChange);
    } catch (e) {
      console.error('Error removing storage event listener:', e);
    }
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'showAnotherComponent') {
        try {
          this.showAnotherComponent = JSON.parse(event.newValue);
        } catch (e) {
          console.error('Error parsing storage event value:', e);
        }
      }
    }
  },
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
@import './assets/styles/style.css';
@import './assets/styles/main.css';
</style>