<template>
  <div>
    <div class="button-panel">
      <button type="submit"
      class="button"
      :style="buttonColor">{{ text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      required: true,
      default: 'ボタン',
      type: String
    },
    color: {
      type: String,
      required: true,
      default: 'red'
    }
  },
  computed: {
    buttonColor () {
      return {
        '--background-color': this.color
      }
    }
  }
}
</script>

<style scoped>
.button {
  margin: 2em 0 0;
  width: 100%;
  background: #f16272;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
  background-color: var(--background-color);
}
</style>
