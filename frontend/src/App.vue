<template>
  <div id="app">

    <Main />
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #49545f;
  margin-top: 60px;
}
</style>
