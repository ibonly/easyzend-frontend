export default {
    props: ['transactions'],
    template: `
      <div class="scan-page">
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
      </div>
    `
  };