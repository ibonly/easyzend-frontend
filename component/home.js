const template = `
  <div class="app">
    <header>
      <span class="time">8:36</span>
      <span class="icons">
        <a href="#scan" @click="openScanPage">🔍</a>
        <a href="#notifications">🔔</a>
      </span>
    </header>
    <main v-if="currentPage === 'home'">
      <h1>$ {{ amount }}</h1>
      <div class="keypad">
        <button v-for="key in keys" :key="key" @click="pressKey(key)">{{ key }}</button>
      </div>
      <div class="actions">
        <button @click="requestMoney">Request</button>
        <button @click="payMoney">Pay</button>
      </div>
    </main>
    
    <main v-if="currentPage === 'scan'" class="scan-page">
      <h2>Activity</h2>
      <input type="text" placeholder="Search Transactions" class="search-bar" />
      <div class="transaction-list">
        <div v-for="transaction in transactions" :key="transaction.id" class="transaction">
          <span :class="['icon', transaction.icon]"></span>
          <div class="details">
            <span class="name">{{ transaction.name }}</span>
            <span class="status">⚠ Declined</span>
          </div>
          <span class="amount">$ {{ transaction.amount }}</span>
        </div>
      </div>
    </main>
    
    <footer>
      <a href="#home" @click="changePage('home')">🏠</a>
      <a href="#scan" @click="changePage('scan')">📷</a>
      <a href="#money">💰</a>
      <a href="#search">🔎</a>
      <a href="#profile">👤</a>
    </footer>
  </div>
`;

export default {
  template: template,
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
      alert(`Paying $${this.amount}`);
    },
    changePage(page) {
      this.currentPage = page;
    },
    openScanPage() {
      this.changePage('scan');
    }
  }
};