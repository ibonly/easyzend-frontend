import {createRouter, createWebHistory} from 'vue-router';
// import router from './router'
import HomeComponent from './../components/private/Home.vue';
import ProfileComponent from '../components/private/Pages/Success.vue';
import TransactionListComponent from '@/components/private/Pages/Transaction.vue';
import SettingComponent from '@/components/private/Pages/Settings.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/setting', name: 'Setting', component: SettingComponent },
    { path: '/transaction', name: 'History', component: TransactionListComponent },
    { path: '/profile', name: 'Profile', component: ProfileComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;