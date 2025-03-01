import UsernameComponent from './username.js';

const template = `
<div class="screen">
    <username-component v-if="showUsername"></username-component>

    <div class="main-page" v-else>
        <h2>What's your date of birth?</h2>
        <p class="center-text">Incorrect date of birth will impact access to most features on Cash App.</p>

        <div class="input-group">
            <input type="date" id="dateOfBirth" placeholder="DD/MM/YYYY" />
        </div>

        <div class="button-group">
            <button class="primary" @click="submit">Submit</button>
        </div>
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
            const input = document.getElementById('dateOfBirth').value;
            if (!this.isValidDateOfBirth(input)) {
                alert('You must be at least 16 years old.');
                return;
            }
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
        },
        isValidDateOfBirth(dob) {
            const birthDate = new Date(dob);
            const ageDiffMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDiffMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            return age >= 16;
        }
    }
};