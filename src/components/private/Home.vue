<template>
  <div class="app">
    <header-component @open-scan-page="openScanPage" @open-notification-page="openNotificationPage">
    </header-component>
    <main v-if="currentPage === 'home'">
      <keypad-component :amount="amount" :keys="keys" @press-key="pressKey" @request-money="requestMoney"
        @pay-money="payMoney"></keypad-component>
    </main>
    <main v-if="currentPage === 'scan'">
      <transaction-list-component :transactions="transactions"></transaction-list-component>
    </main>
    <main v-if="currentPage === 'profile'">
      <profile-component :transactions="transactions"></profile-component>
    </main>
    <main v-if="currentPage === 'settings'">
      <settings-component :transactions="transactions"></settings-component>
    </main>
    <main v-if="currentPage === 'notification'">
      <notification-component></notification-component>
    </main>
    <footer>
      <a href="#home" @click="changePage('home')"><i class="fa-solid fa-house white-icon"></i></a>
      <a href="#scan" @click="changePage('scan')"><i class="fa-solid fa-chart-line white-icon"></i></a>
      <a href="#money">💰</a>
      <a href="#search" @click="changePage('settings')"><i class="fa-solid fa-gear white-icon"></i></a>
      <a href="#profile" @click="changePage('profile')"><i class="fa-solid fa-user white-icon"></i></a>
    </footer>
  </div>
</template>>

<script>
import HeaderComponent from './Section/Header.vue';
import KeypadComponent from './Section/Keypad.vue';
import TransactionListComponent from './Pages/Transaction.vue';
import SettingsComponent from './Pages/Settings.vue';
import ProfileComponent from './Pages/Profile.vue';
import NotificationComponent from './Pages/Notification.vue';

export default {
  name: 'HomeComponent',
  components: {
    HeaderComponent,
    KeypadComponent,
    TransactionListComponent,
    SettingsComponent,
    ProfileComponent,
    NotificationComponent
  },
  data() {
    return {
      amount: "0",
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "⌫"],
      currentPage: "home",
      transactions: [
        { id: 1, name: "Gotinder.com Help", amount: "179.99", icon: "location" },
        { id: 2, name: "Crpsnglc.com", amount: "39.99", icon: "location" },
        { id: 3, name: "SNGRRLLGT.com", amount: "39.99", icon: "location-red" },
        { id: 4, name: "Amazon", amount: "142.87", icon: "amazon" }
      ]
    };
  },
  methods: {
    pressKey(key) {
      if (key === "⌫") {
        this.amount = this.amount.slice(0, -1) || "0";
      } else {
        this.amount = this.amount === "0" ? key.toString() : this.amount + key;
      }
    },
    requestMoney() {
      alert(`Requesting $${this.amount}`);
    },
    payMoney() {
      this.changePage('success');
    },
    changePage(page) {
      this.currentPage = page;
    },
    openScanPage() {
      this.changePage('scan');
    },
    openNotificationPage() {
      this.changePage('notification');
    }
  }

}
</script>