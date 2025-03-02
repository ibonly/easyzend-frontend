<template>
    <div class="screen">
        <date-of-birth-component v-if="showDateOfBirth"></date-of-birth-component>

        <div class="main-page" v-else>
            <h2>What's your legal name?</h2>
            <p>
                <center>This should match the name on your government ID.</center>
            </p>


            <div class="input-group">
                <input type="text" id="firstName" placeholder="Legal first name" />
            </div>

            <div class="input-group">
                <input type="text" id="lastName" placeholder="Legal last name" />
            </div>
            <div class="button-group">
                <button class="primary" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import DateOfBirthComponent from './DateOfBirth.vue';

export default {
    name: 'BankComponent',
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
}
</script>

<style scoped>
/* Removed styles moved to global.css */
</style>