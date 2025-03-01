import HomeComponent from './../Pages/home.js';

const template = `
<div class="screen">
    <home-component v-if="showHomeComponent"></home-component>
    <div class="main-page" v-else>
        <h2>Invite Friends and Get $5</h2>

        <div class="description">
            <p>Make it easy to find friends, protect your account, and prevent spam by allowing Cash App to access and store your contact list.</p>
            <p>You can change these permissions at any time in Settings.</p>
        </div>

        <div class="button-group">
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
            localStorage.setItem('showAnotherComponent', JSON.stringify(true));
        }
    }
};