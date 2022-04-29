<template>
  <div>
    <div class="button-panel">
      <button type="submit" class="button">会員登録</button>
    </div>
  </div>
</template>

<style scoped>
.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #09ad35;
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
}

.button:hover {
  background: #1dcf4c;
}
</style>
