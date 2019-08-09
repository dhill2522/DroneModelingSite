<template>
    <div class="mainWindow">
        <Plot class="plot"></Plot>
        <div class="tab-holder">
            <div class="tabs">
                <ul>
                    <li v-bind:class="{ 'is-active': currentTab === 'docs'}">
                        <a @click="currentTab = 'docs'">Documentation/Help</a>
                    </li>
                    <li v-bind:class="{ 'is-active': currentTab === 'drone'}">
                        <a @click="currentTab = 'drone'">Drone Details</a>
                    </li>
                    <!-- <li v-bind:class="{ 'is-active': currentTab === 'log'}">
                        <a @click="currentTab = 'log'">Simulation Log</a>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="scrollBox">
            <div v-if="currentTab==='docs'"><HelpDocs></HelpDocs></div>
            <div v-if="currentTab==='drone'"><DroneDetails></DroneDetails></div>
            <!-- <div v-if="currentTab==='log'"><SimLog></SimLog></div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Plot from './Plot.vue'
import HelpDocs from './HelpDocs.vue'
import DroneDetails from './DroneDetails.vue'
import SimLog from './SimLog.vue'
import { backendService } from '../services'

@Component({
    components: { Plot, HelpDocs, DroneDetails, SimLog },
})
export default class Main extends Vue {
    private currentTab: 'docs' | 'drone' | 'log' = 'docs'
}
</script>
<style scoped>
.mainWindow {
    display: flex;
    flex-direction: column;
    min-height: 600px;
}

.plot {
    flex-grow: 0;
    flex-shrink: 0;
    height: 500px;
}

.tab-holder {
    flex-grow: 0;
    flex-shrink: 0;
    height: 41px;
}

.scrollBox {
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: scroll;
}

.scrollBox > div {
    padding-top: 5px;
}

</style>

