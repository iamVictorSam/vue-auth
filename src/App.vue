<template>
  <main id="app">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 3rem;
  color: whitesmoke;
  background-color: black;
  height: 110vh;
}

button {
  color: red;
  box-shadow: 0 5px 8px 0 rgba(115, 115, 115, 0.24),
    0 7px 20px 0 rgba(72, 72, 72, 0.19);
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 19px;
}
</style>
