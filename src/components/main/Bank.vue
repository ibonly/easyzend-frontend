<template>
    <div class="screen">
        <user-details-component v-if="showUserDetails"></user-details-component>

        <div class="main-page" v-else>
            <h2>Add a bank using your debit card</h2>
            <p>Linking an external account allows you to move money in and out of your balance.</p>

            <div class="input-group">
                <select id="listOfBanks" v-model="selectedBank">
                    <option value="" selected>Select Bank</option>
                    <option v-for="bank in bankList" :key="bank.id" :value="bank.id">{{ bank.name }}</option>
                </select>
            </div>

            <div class="input-group">
                <input type="number" id="accountNumber" placeholder="Account Number" />
            </div>

            <div class="input-group">
                <input type="text" id="accountName" placeholder="Account Name" readonly />
            </div>

            <div class="button-group">
                <button class="primary" @click="submit">
                    Add Bank
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetailsComponent from './UserDetails.vue';

export default {
    name: 'BankComponent',
    data() {
        return {
            showUserDetails: false,
            bankList: [],
            selectedBank: null
        };
    },
    created() {
        this.fetchBankList();
    },
    components: {
        UserDetailsComponent
    },
    methods: {
        async fetchBankList() {
            // try {
            //     const response = await fetch('https://api.example.com/banks');
            //     if (response.ok) {
            //         this.bankList = await response.json();
            this.bankList = [
                { value: 'us', name: 'United States' },
                { value: 'ca', name: 'Canada' },
                { value: 'uk', name: 'United Kingdom' }
            ];
            //     } else {
            //         console.error('Failed to fetch bank list');
            //     }
            // } catch (error) {
            //     console.error('Error fetching bank list:', error);
            // }
        },
        async submit() {
            console.log(333333);
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
            // Show userDetails component
            this.showUserDetails = true;
            // } else {
            //     console.error('API call failed');
            // }
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