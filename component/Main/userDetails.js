import DateOfBirthComponent from './dateOfBirth.js';

const template = `
    <div class="screen">
        <date-of-birth-component v-if="showDateOfBirth"></date-of-birth-component>
        <div v-else>
            <h2>What's your legal name?</h2>
            <p>This should match the name on your government ID.</p>
            <p><input type="text" placeholder="Legal first name" /></p>
            <p><input type="text" placeholder="Legal last name" /></p>
            <p><button class="primary" @click="submit">Next</button></p>
        </div>
    </div>`;

export default {
    template: template,
    data() {
        return {
            showDateOfBirth: false
        };
    },
    components: {
        DateOfBirthComponent
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
            this.showDateOfBirth = true;
            // } else {
            //     console.error('API call failed');
            // }
            // } catch (error) {
            //     console.error('Error during API call:', error);
            // }
        }
    }
};