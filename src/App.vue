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
  flex-direction: row
}

.side-bar {
  order: 1;
  width: 25%;
  height: 100%;
  border: seagreen solid;
  border-radius: 10px;
  padding: 10px;
}

.main {
  order: 1;
  height: 100%;
  width: 75%;

}

</style>
