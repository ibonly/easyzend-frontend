<template>
    <div v-if="loading">Loading...</div>
    <SuccessComponent v-else-if="showSuccess" :transactions="transactions" />
    <div v-else class="success-page">
        <h2>Transaction Summary</h2>

        <div class="contact-item">
            <span>Account Balance</span>
            <span>{{ balance }}</span>
        </div>
        <div v-for="contact in contacts" :key="contact.id" class="contact-item">
            <span>{{ contact.name }}</span>
            <span>{{ amount }}</span>
        </div>
        <div class="contact-item">
            <span>Total Amount</span>
            <span>{{ totalAmount }}</span>
        </div>
        <div class="contact-item">
            <span>Balance After</span>
            <span>{{ balanceAfter }}</span>
        </div>
        <button class="primary" @click="proceed">Proceed</button>
    </div>
</template>

<script>
import SuccessComponent from './Success.vue';

export default {
    name: 'ProcessComponent',
    props: ['amount', 'contacts'],
    components: {
        SuccessComponent
    },
    data() {
        return {
            balance: 2000000,
            loading: false,
            showSuccess: false,
            transactions: []
        }
    },
    computed: {
        totalAmount() {
            return this.amount * this.contacts.length;
        },
        balanceAfter() {
            return this.balance - this.totalAmount;
        }
    },
    methods: {
        async proceed() {
            this.loading = true;
            this.transactions = this.contacts.map(contact => ({
                name: contact.name,
                amount: this.amount
            }));

            // Simulate API call
            setTimeout(() => {
                this.loading = false;
                this.showSuccess = true;
                console.log('Transactions sent successfully', this.transactions);
            }, 2000);

            // Uncomment and use the actual API call
            // try {
            //     const response = await fetch('https://api.example.com/transactions', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(this.transactions)
            //     });

            //     if (response.ok) {
            //         this.loading = false;
            //         this.showSuccess = true;
            //         console.log('Transactions sent successfully', this.transactions);
            //     } else {
            //         this.loading = false;
            //         console.error('Failed to send transactions');
            //     }
            // } catch (error) {
            //     this.loading = false;
            //     console.error('Error sending transactions:', error);
            // }
        }
    }
};
</script>

<style scoped>
.success-page {
    text-align: center;
    margin-top: 20px;
}
.contact-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
