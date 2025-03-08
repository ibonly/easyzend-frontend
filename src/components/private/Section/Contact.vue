<template>
    <div class="input-group">
        <select id="listOfBanks" v-model="contactList" multiple @change="updateSelectedContacts">
            <option value="" selected>Select Bank</option>
            <option v-for="bank in bankList" :key="bank.id" :value="bank">{{ bank.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'ContactComponent',
    data() {
        return {
            showUserDetails: false,
            bankList: [],
            contactList: []
        };
    },
    created() {
        this.fetchBankList();
    },
    methods: {
        async fetchBankList() {
            // try {
            //     const response = await fetch('https://api.example.com/banks');
            //     if (response.ok) {
            //         this.bankList = await response.json();
            this.bankList = [
                { value: '1', name: 'John Doe 1' },
                { value: '2', name: 'Jane Doe 2' },
                { value: '3', name: 'Jadon Doe 3' },
                { value: '4', name: 'John Doe 4' },
                { value: '5', name: 'Jane Doe 5' },
                { value: '6', name: 'John Doe 6' },
                { value: '7', name: 'Jane Doe 7' },
                { value: '8', name: 'John Doe 8' },
                { value: '9', name: 'Jane Doe 9' },
                { value: '10', name: 'John Doe 10' },
                { value: '11', name: 'Jane Doe 11' },
                { value: '12', name: 'John Doe 12' },
                { value: '13', name: 'Jane Doe 13' },
                { value: '14', name: 'John Doe 14' },
                { value: '15', name: 'Jane Doe 15' },
                { value: '16', name: 'John Doe 16' },
                { value: '17', name: 'Jane Doe 17' },
                { value: '18', name: 'John Doe 18' },
                { value: '19', name: 'Jane Doe 19' },
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
        },
        updateSelectedContacts() {
            this.$emit('update-contacts', this.contactList);
        }
    }
}
</script>

<style scoped>
/* Removed styles moved to global.css */
.input-group {
    margin-top: 0px;
}
</style>