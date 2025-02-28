import UserDetailsComponent from './userDetails.js';

const template = `
 <div class="screen">
    <user-details-component v-if="showUserDetails"></user-details-component>
    <div v-else>
        <h2>Add a bank using your debit card</h2>
        <p>Linking an external account allows you to move money in and out of your balance.</p>
        <input type="text" placeholder="Debit Card Number" />
        <div class="inline-inputs">
        <input type="text" placeholder="MM/YY" />
        <input type="text" placeholder="3-Digit CVV" />
        </div>
        <div class="button-group">
        <button class="secondary" @click="$emit('skip')">Skip</button>
        <button class="primary" @click="submit">Link Card</button>
        </div>
    </div>
  </div>`;

export default {
    template: template,
    data() {
        return {
            showUserDetails: false
        };
    },
    components: {
        UserDetailsComponent
    },
    methods: {
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
};