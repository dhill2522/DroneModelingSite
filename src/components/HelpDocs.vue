<template>
    <div>
        <h1 class="subtitle">
            <i>Drone-AWE</i> - Drones Applications in Weather Environments
        </h1>


        <div style="text-align:left;">
            <p>
                The purpose of the Drone Applications in Weather Environments (Drone-AWE) project is to predict drone performance under a wide range of weather conditions with mission planning and battery behavior in mind. Drone-AWE is powered by an interactive python library located at <a href="https://github.com/rymanderson/drone_awe">GitHub</a>. For an explanation of the theory and physics used to develop Drone-AWE, or if you would like to use the Drone-AWE library as a Python package, visit <a href="https://rymanderson.github.io/site/">the docs</a>. 
            </p>
            <p style="margin-top: 10px; margin-bottom: 10px;">
                Below is a list of input parameters for drone simulations accompanied by a brief description.
            </p>
            <p class="paramDesc">
                <b>Validation Case:</b> These are published experimental cases for validating the developed models. Each of these cases already has specific system parameters defined, so settings are disabled when a validation case is selected.
            </p>            
            <p class="paramDesc">
                <b>Drone Name:</b> The name of the drone to to be simulated. Details about the selected drone can be found in the Drone Details tab. Validation cases often use drones not included in this package or are modified versions, so the information in Drone Details does not necessarily reflect the details of the same drone used in a validation case.
            </p>
            <p class="paramDesc">
                <b>Battery Technology:</b> The type of battery technology in use. Battery technology is rapidly changing, so near-future and future technologies are predicted assuming a 3.5% increase in battery capacity per year for 5 years for near-future and 10 times the capacity for far-future technology.
            </p>
            <p class="paramDesc">
                <b>State Of Health:</b> The state of health for the drone battery expressed as a percent of the batteries original capacity.
            </p>
            <p class="paramDesc">
                <b>Initial Charge:</b> The initial percent charge of the drone battery.
            </p>
            <p class="paramDesc">
                <b>Altitude:</b> The altitude at which the simulation should be run.
            </p>
            <p class="paramDesc">
                <b>Droplet Size:</b> Average rain droplet diameter.
            </p>
            <p class="paramDesc">
                <b>Liquid Water Content:</b> The mass of liquid water per unit volume of air of the rainfall.
            </p>
            <p class="paramDesc">
                <b>Temperature:</b> The temperature at which to simulate the system.
            </p>
            <p class="paramDesc">
                <b>Wind Speed:</b> The wind speed used in the simulation.
            </p>
            <p class="paramDesc">
                <b>Wind Direction:</b> The wind direction to be used for the simulation as degrees East of North.
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

