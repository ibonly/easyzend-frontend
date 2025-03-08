
<template>
      <div>
    <div>
      <!-- Payment Confirmation UI -->
      <h2>Payment Confirmation</h2>
      <p>Payment to {{ recipient }}</p>
      <h1>$ {{ amount }}</h1>
      <p>For {{ reason }}</p>
      <p>{{ timestamp }}</p>
      <button @click="goBack">Done</button>
    </div>
  </div>
</template>
<script>
export default {
    props: ['transactions'],
    name: 'SuccessComponent',
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