<template>
  <div class="screen">
    <bank-details v-if="showBankDetails"></bank-details>
    <div class="main-page" v-else>
      <h2>Enter Your Phone/Email</h2>

      <div class="input-group" v-if="usePhoneNumber">
        <span class="prefix">+1</span>
        <input type="tel" placeholder="Mobile Number" v-model="phoneNumber" />
      </div>

      <div class="input-group" v-else>
        <span class="prefix">@</span>
        <input type="email" placeholder="email@email.com" v-model="phoneNumber" />
      </div>

      <div class="button-group">
        <button class="secondary" v-if="usePhoneNumber" @click="switchToPhoneNumber">
          Use Email
        </button>
        <button class="secondary" @click="switchToEmail" v-else>
          Use Phone Number
        </button>
        <button class="primary" @click="nextStep">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BankDetails from './Bank.vue';

export default {
  name: 'LoginComponent',
  components: {
    BankDetails
  },
  data() {
    return {
      phoneNumber: '',
      usePhoneNumber: true,
      showBankDetails: false
    };
  },
  methods: {
    switchToEmail() {
      console.log('Switching to email');
      this.usePhoneNumber = true;
    },
    switchToPhoneNumber() {
      this.usePhoneNumber = false;
    },
    async nextStep() {
      // try {
      // Replace with your actual API call
      // const response = await fetch('https://api.example.com/submit', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({ phoneNumber: this.phoneNumber })
      // });

      // if (response.ok) {
      //     console.log('Next step with phone number:', this.phoneNumber);
      // Show bankDetails component
      this.showBankDetails = true;
      //     } else {
      //         console.error('API call failed');
      //     }
      // } catch (error) {
      //     console.error('Error during API call:', error);
      // }
    }
  }
}
</script>

<style scoped>
/* Removed styles moved to global.css */
</style>
