<template>
  <div>
    <div class="button-panel">
      <button :type="type" class="button" :style="`background: ${color}`">{{ text }}</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#f16272'
    },
    type: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
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

  &:hover {
    opacity: 0.7;
  }
}
</style>
