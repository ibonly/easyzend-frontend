<template>
    <div class="screen">
        <referral-component v-if="showReferral"></referral-component>

        <div class="choose-cash-pin-container main-page" v-else>
            <h2>Choose a Cash PIN as a backup for Touch ID</h2>

            <div class="pin-input-container">
                <div class="center-text">
                    <input type="password" v-model="cashPin" maxlength="4" @input="validatePin" placeholder="••••"
                        class="pin-input" autocomplete="off" autocorrect="off" autocapitalize="off"
                        spellcheck="false" />
                </div>

                <div class="button-group">
                    <button class="primary" @click="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReferralComponent from './Referral.vue';

export default {
    name: 'BankComponent',
    components: {
        ReferralComponent
    },
    data() {
        return {
            cashPin: '',
            showReferral: false
        };
    },
    methods: {
        validatePin(event) {
            this.cashPin = event.target.value.replace(/\D/g, '').slice(0, 4);
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
            this.showReferral = true;
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