import HomeComponent from './../Pages/home.js';

const template = `
<div class="screen">
    <home-component v-if="showHomeComponent"></home-component>
    <div v-else>
        <div class="header">
            <h1>Invite Friends and Get $5</h1>
        </div>
        <div class="description">
            <p>Make it easy to find friends, protect your account, and prevent spam by allowing Cash App to access and store your contact list.</p>
            <p>You can change these permissions at any time in Settings.</p>
        </div>
        <div class="buttons">
            <button class="primary" @click="continueAction">Continue</button>
        </div>
    </div>
</div>`;

export default {
    template: template,
    components: {
        HomeComponent
    },
    data() {
        return {
            cashPin: '',
            showReferral: false,
            showHomeComponent: false
        };
    },
    methods: {
        continueAction() {
            // Handle the continue action
            console.log('Continue button clicked');
            this.showHomeComponent = true;
        }
    }
};