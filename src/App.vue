<template>
  <div id="app">
    <Profile/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Profile from './components/Profile.vue';
import ToggleButton from 'vue-js-toggle-button'
 
Vue.use(ToggleButton)

@Component({
  components: {
    Profile
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
