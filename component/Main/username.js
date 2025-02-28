import PinComponent from './pin.js';

const template = `
 <div class="screen">
        <pin-component v-if="showPinComponent"></pin-component>
        <div v-else>
    <h2>Choose a $Cashtag</h2>
    <p>Your unique name for getting paid by anyone</p>
    <p><input type="text" placeholder="$Cashtag" /></p>
    <p><button class="primary" @click="submit">Next</button></p>
    </div>
  </div>`;

export default {
    template: template,
    components: {
        PinComponent
    },
    data() {
        return {
            showPinComponent: false
        };
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
            this.showPinComponent = true;
            // } else {
            //     console.error('API call failed');
            // }
            // } catch (error) {
            //     console.error('Error during API call:', error);
            // }
        }
    }

};