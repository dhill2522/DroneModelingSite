<template>
    <div>
        <h1 class="subtitle">
            drone_awe - Drones Applications in Weather Environments
        </h1>


        <div style="text-align:left;">
            <p>
                This project seeks to advance the state of the art of drone performance predictions under a wide range of weather and battery conditions with mission planning in mind. This is the interactive GUI for the python library on <a href="https://github.com/rymanderson/drone_awe">GitHub</a>. Please see the GitHub or ReadTheDocs pages for mor details on theory and use.
            </p>
            <p style="margin-top: 10px; margin-bottom: 10px;">
                Below is a list of the input parameters for this project along with a brief description of each of them. See the documentation for more details.
            </p>
            <p class="paramDesc">
                <b>Validation Case:</b> These are real experimental cases for validating the developed models. Each of these cases already has specific system parameters defined, so adjusting these parameters is disabled.
            </p>            
            <p class="paramDesc">
                <b>Drone Name:</b> The name of the drone to run the simulation with. Details about the selected drone can be found in the Drone Details tab. Validation cases often use drones not included in this package, so the information in Drone Details does not necessarily reflect the details of the drone used in a validation case.
            </p>
            <p class="paramDesc">
                <b>Battery Technology:</b> The type of battery technology in use. Battery technology is rapidly changing, so near-future and future technologies are regarded as being better. 
            </p>
            <p class="paramDesc">
                <b>State Of Health:</b> The state of health for the drone battery expressed as a percent of the batteries original capacity.
            </p>
            <p class="paramDesc">
                <b>Initial Charge:</b> The initial percent charge of the drone battery.
            </p>
            <p class="paramDesc">
                <b>Altitude:</b> The Altitude at which the simulation should be run.
            </p>
            <p class="paramDesc">
                <b>Droplet Size:</b> The size of any droplets of precipitation.
            </p>
            <p class="paramDesc">
                <b>Liquid Water Content:</b> The Liquid water content of the air.
            </p>
            <p class="paramDesc">
                <b>Temperature:</b> The temperature at which so simulate the system.
            </p>
            <p class="paramDesc">
                <b>Wind Speed:</b> The wind speed to be used for the simulation.
            </p>
            <p class="paramDesc">
                <b>Wind Direction:</b> The wind direction to be used for the simulation.
            </p>
            <p class="paramDesc">
                <b>Relative Humidity:</b> The relative humidity to be used for the simulation.
            </p>
            <p class="paramDesc">
                <b>Manipulated Variable:</b> The variable to be manipulated in the simulation. The other variables are then calculated based on the manipulated variable.
            </p>
            <p class="paramDesc">
                <b>MV Initial Value:</b> The initial value of the manipulated variable.
            </p>
            <p class="paramDesc">
                <b>MV Final Value:</b> The final value of the manipulated variable. 
            </p>
            <p class="paramDesc">
                <b>MV Number of Points:</b> The number of values to use in the array of manipulated variable values.
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class HelpDocs extends Vue {
}
</script>
<style scoped>

</style>

