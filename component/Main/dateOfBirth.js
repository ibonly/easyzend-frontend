import UsernameComponent from './username.js';

const template = `
 <div class="screen">
    <username-component v-if="showUsername"></username-component>
    <div v-else>
        <h2>What's your date of birth?</h2>
        <p>Incorrect date of birth will impact access to most features on Cash App.</p>
        <p><input type="text" placeholder="MM/DD/YYYY" /></p>
            <p><button class="primary" @click="submit">Next</button></p>
    </div>
  </div>`;

export default {
    template: template,
    data() {
        return {
            showUsername: false
        };
    },
    components: {
        UsernameComponent
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
            this.showUsername = true;
            // } else {
            //     console.error('API call failed');
            // }
            // } catch (error) {
            //     console.error('Error during API call:', error);
            // }
        }
    }
};