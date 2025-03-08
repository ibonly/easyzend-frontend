<template>
  <div class="keypadLayout">
    <div :class="amount.length >= 6 ? 'small-font' : 'big-font'">&#8358;{{ amount }}</div>
    <div class="keypad">
      <button v-for="key in keys" :key="key" @click="pressKey(key, $event)" class="buttonPressed">{{ key }}</button>
    </div>
    <div class="actions">
      <button @click="$emit('request-money')" class="primary">Request</button>
      <button @click="$emit('pay-money')" class="primary">Pay</button>
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

      console.log(this.amount);
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

<style scoped>
.big-font {
  font-size: 40px;
}
.small-font {
  font-size: 40px;
}
</style>