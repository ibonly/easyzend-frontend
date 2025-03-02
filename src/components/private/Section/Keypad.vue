<template>
  <div>
    <h1>$ {{ amount }}</h1>
    <div class="keypad">
      <button v-for="key in keys" :key="key" @click="pressKey(key, $event)">{{ key }}</button>
    </div>
    <div class="actions">
      <button @click="$emit('request-money')">Request</button>
      <button @click="$emit('pay-money')">Pay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeypadComponent',
  props: ['amount', 'keys'],
  methods: {
    pressKey(key, event) {
      this.$emit('press-key', key);
      this.changeButtonBackground(event.target);
    },
    changeButtonBackground(button) {
      button.style.backgroundColor = 'darkgray';
      setTimeout(() => {
        button.style.backgroundColor = 'gray';
      }, 300);
    }
  }
};
</script>