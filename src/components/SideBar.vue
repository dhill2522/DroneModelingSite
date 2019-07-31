<template>
    <div>
        <h2>Drone Modeling</h2>
        <hr>
        <div class="form-holder">
            <div class="form-row">
                <label>Drone Name</label>
                <input type="text" v-model="droneName">
            </div>
            <div class="form-row">
                <label>Battery Technology</label>
                <select id="">
                    <option v-for="tech of batteryTechnologies" v-bind:key="tech.id">{{ tech.name }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>State Of Health (%)</label>
                <input type="range" v-model="stateOfHealth">
            </div>
            <div class="form-row">
                <label>Initial Charge (%)</label>
                <input type="range" v-model="startStateOfCharge">
            </div>
            <div class="form-row">
                <label>ASL Altitude (m)</label>
                <input type="number" v-model="altitude">
            </div>
            <div class="form-row">
                <label>Droplet Size (mm)</label>
                <input type="range" v-model="dropSize">
            </div>
            <div class="form-row">
                <label>Liquid Water Content (kg/m^3)</label>
                <input type="range" v-model="liquidWaterContent">
            </div>
            <div class="form-row">
                <label>Temperature (C)</label>
                <input type="number" v-model="temperature">
            </div>
            <div class="form-row">
                <label>Wind Speed (m/s)</label>
                <input type="range" min="0" max="50" v-model="windSpeed">
            </div>
            <div class="form-row">
                <label>Wind Direction (degrees)</label>
                <input type="range" max="360" min="0" v-model="windDirection">
            </div>
            <div class="form-row">
                <label>Relative Humidity (%)</label>
                <input type="range" v-model="relativeHumidity">
            </div>
        </div>
        <button @click="test()">Test</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { independentVariables, yVariables, batteryTypes } from '../data'
import { independentVariable, yVariable, Params } from '../models'
import { backendService } from '../services'

@Component
export default class SideBar extends Vue {
    private msg = 'Side Bar Component'
    private droneName = 'dji-Mavic2'
    private batteryTechnology = 'near-future'
    private batteryTechnologies = batteryTypes
    private stateOfHealth = 100.0
    private startStateOfCharge = 100.0
    private altitude = 0.0
    private dropSize = 0.0
    private liquidWaterContent = 0.0
    private temperature = 25.0
    private windSpeed = 0.0
    private windDirection = 0.0
    private relativeHumidity = 0.0
    private timestep = 0
    private xLabel: independentVariable = independentVariables[0]
    private yLabel: yVariable = yVariables[0]
    private title = ''
    private xArray = []
    private weatherEffect = 'temperature'

    private test(): void {
        const data: Params = {
            validation: false,
            validationcase: 'DiFranco2016',
            dronename: this.droneName,
            batterytechnology: this.batteryTechnology,
            stateofhealth: this.stateOfHealth,
            startstateofcharge: this.startStateOfCharge,
            altitude: this.altitude,
            dropsize: this.dropSize,
            liquidwatercontent: this.liquidWaterContent,
            temperature: this.temperature,
            windspeed: this.windSpeed,
            winddirection: this.windDirection,
            relativehumidity: this.relativeHumidity,
            timestep: this.timestep,
            xlabel: this.xLabel,
            ylabel: this.yLabel,
            title: this.title,
            xarray: this.xArray,
            weathereffect: this.weatherEffect,
        }
        // console.log(data)
        backendService.makeRequest(data)
    }

    private mounted(): void {
        backendService.getValidationCases()
    }
}
</script>
<style scoped>
.form-holder {
    display: flex;
    flex-direction: column;
}
.form-row {
    flex-direction: row;
    margin-bottom: 10px;
}

</style>

