<template>
  <div class="app">
    <header-component @open-scan-page="openScanPage" @open-notification-page="openNotificationPage" />
    <contact-component @update-contacts="updateContacts" v-if="showBreadcrumbs" />
    <div class="breadcrumbs" v-if="showBreadcrumbs">
      <span v-for="contact in selectedContacts" :key="contact.id" class="breadcrumb" @click="editContacts">{{ contact.name }}</span>
    </div>
    <div v-if="showEditContacts" class="edit-contacts">
      <select id="listOfBanks" v-model="contactList" multiple @change="updateSelectedContacts">
        <option value="" selected>Select Bank</option>
        <option v-for="bank in contactList" :key="bank.id" :value="bank">{{ bank.name }}</option>
      </select>
      <button @click="saveContacts">Save</button>
    </div>
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
    <main v-if="currentPage === 'success'">
      <success-component :amount="amount" :contacts="selectedContacts"></success-component>
    </main>
    <footer>
      <a href="#home" @click="changePage('home')"><i class="fa-solid fa-house white-icon"></i></a>
      <a href="#scan" @click="changePage('scan')"><i class="fa-solid fa-chart-line white-icon"></i></a>
      <a href="#money">💰</a>
      <a href="#search" @click="changePage('settings')"><i class="fa-solid fa-gear white-icon"></i></a>
      <a href="#profile" @click="changePage('profile')"><i class="fa-solid fa-user white-icon"></i></a>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from './Section/Header.vue';
import KeypadComponent from './Section/Keypad.vue';
import ContactComponent from './Section/Contact.vue';
import TransactionListComponent from './Pages/Transaction.vue';
import SettingsComponent from './Pages/Settings.vue';
import ProfileComponent from './Pages/Profile.vue';
import NotificationComponent from './Pages/Notification.vue';
import SuccessComponent from './Pages/Success.vue';

export default {
  name: 'HomeComponent',
  components: {
    HeaderComponent,
    KeypadComponent,
    ContactComponent,
    ProfileComponent,
    SettingsComponent,
    NotificationComponent,
    TransactionListComponent,
    SuccessComponent
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
      ],
      selectedContacts: [],
      showEditContacts: false,
      contactList: [],
      bankList: [],
      showBreadcrumbs: true
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
      this.showBreadcrumbs = false;
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
    },
    updateContacts(contacts) {
      this.selectedContacts = contacts;
    },
    editContacts() {
      this.showEditContacts = true;
      this.contactList = this.selectedContacts;
    },
    saveContacts() {
      this.showEditContacts = false;
      this.updateContacts(this.contactList);
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
  margin-top: -20px;
  margin: 10px 0;
}
.breadcrumb {
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  background-color: #e1ffe7;
  color: #000;
  cursor: pointer;
}
.edit-contacts {
  margin: 10px 0;
}
</style>