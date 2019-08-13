<template>
  <div id="app">
    <div class="modal" :class="{ 'is-active': showWarning }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            To the User...
          </p>
          <buttton class="delete" @click="closeWarningModal()"></buttton>
        </header>
        <section class="modal-card-body">
          <p>Drone-AWE is designed to be a versatile modeling package that reliably predicts drone performance. 
            It has been developed based on a literature review of drone weather and battery performance published 
            in Advanced Commercial Drone Economics by Darryl Jenkins et al. and other research available in the 
            docs. Two stages remain to be conducted: first, wind tunnel data will be gathered and used to validate 
            and refine the model; second, field testing will be performed for further validation and refinement. 
            In its current state, Drone-AWE is NOT DESIGNED FOR PRECISE ENGINEERING APPLICATIONS. It is, however, 
            useful for qualitative, back-of-the-envelope predictions and comparison.</p>
          <p>If you have experimental data available for any drone and are interested in furthering open-source 
              drone performance research, please make an issue <a href="https://github.com/rymanderson/drone_awe/issues">Github Respository</a>. Thank you for your support.
          <p>- The Drone-AWE Team</p>
        </section>
        <footer class="modal-card-foot">
          <button class="is-success button" @click="closeWarningModal()">Close</button>
        </footer>
      </div>
    </div>
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
export default class App extends Vue {
  private showWarning = true

  private closeWarningModal(): void {
    this.showWarning = false
  }
}
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
