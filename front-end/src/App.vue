<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Student</router-link> |
      <router-link to="/TA">TA</router-link> |
      <router-link to="/FAQPage">FAQ</router-link>
    </div>
    <router-view/>
    <a class="footer" href="https://github.com/smith897/creative-3">Github</a>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  background-color: #EFEFEF;
}

#app {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
