
<template>
      <div>
    <div v-if="showConfirmation">
      <!-- Payment Confirmation UI -->
      <h2>Payment Confirmation</h2>
      <p>Payment to {{ recipient }}</p>
      <h1>$ {{ amount }}</h1>
      <p>For {{ reason }}</p>
      <p>{{ timestamp }}</p>
      <button @click="goBack">Done</button>
    </div>
    
    <div v-else>
      <!-- Payment & Wallet UI -->
      <div v-if="showPayment">
        <h2>Payment</h2>
        <button @click="toggleWallet">Go to Wallet</button>
        <button @click="confirmPayment">Send Payment</button>
      </div>
      
      <div v-if="!showPayment">
        <h2>Wallet</h2>
        <button @click="toggleWallet">Go to Payment</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['transactions'],
    name: 'ProfileComponent',
    data() {
      return {
        showPayment: true,
        showConfirmation: false,
        recipient: 'AbellaAbella',
        amount: 500.00,
        reason: 'BILLS ❤️',
        timestamp: 'Today at 1:57 PM'
      };
    },
    methods: {
      toggleWallet() {
        this.showPayment = !this.showPayment;
      },
      confirmPayment() {
        this.showConfirmation = true;
      },
      goBack() {
        this.showConfirmation = false;
      }
    }
  };
</script>