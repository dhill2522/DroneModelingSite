<template>
  <div id="app">
    <div class="holder">
      <SideBar class="side-bar"/>
      <Main class="main"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './components/Main.vue'
import SideBar from './components/SideBar.vue'

@Component({
  components: {
    Main,
    SideBar,
  },
})
export default class App extends Vue {}
</script>

<style>

html {
  height: 100%;
}

body {
  min-height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.holder {
  bottom: 0px;
  top: 0px;
  right: 0px;
  left: 0px;
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 98vh;
  min-height: 98vh;
  max-height: 98vh;
}

.side-bar {
  order: 1;
  width: 25%;
  height: 100%;
  border: seagreen solid;
  border-radius: 10px;
  padding: 10px;
  margin: 8px;
}

.main {
  order: 1;
  height: 100%;
  width: 75%;

}

</style>