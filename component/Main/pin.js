import ReferralComponent from './referral.js';

const template = `
 <div class="screen">
    <referral-component v-if="showReferral"></referral-component>
    <div class="choose-cash-pin-container" v-else>
        <div class="header">
        <h2>Choose a Cash PIN as a backup for Touch ID</h2>
        </div>
        <div class="pin-input-container">
        <form>
            <input
                type="password"
                v-model="cashPin"
                maxlength="4"
                @input="validatePin"
                placeholder="••••"
                class="pin-input"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
            />
        <p><button class="primary" @click="submit">Next</button></p>
        </form>
        </div>
    </div>
  </div>`;

export default {
    template: template,
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
};