<template>
  <div>
    <div class="button-panel">
      <button type="submit" class="button">会員登録</button>
    </div>
  </div>
</template>

<style>
/* ButtonStyle */
.btn--orange,
button.btn--orange {
  color: #fff;
  background-color: #eb6100;
}
.btn--orange:hover,
button.btn--orange:hover {
  color: #fff;
  background: #f56500;
}

button.btn--radius {
   border-radius: 100vh;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
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
}

.button:hover {
  background: #ee3e52;
}
</style>
