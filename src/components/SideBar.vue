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
import { independentVariable, yVariable } from '../models'
import { backendService } from '../services'

@Component
export default class SideBar extends Vue {
    private msg = 'Side Bar Component'
    private droneName = ''
    private batteryTechnology = ''
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
    private xLabel = independentVariables[0]
    private yLabel = yVariables[0]
    private title = ''
    private xArray = []
    private weatherEffect = ''

    private test(): void {
        const data = {
            droneName: this.droneName,
            batteryTechnology: this.batteryTechnology,
            stateOfHealth: this.stateOfHealth,
            startStateOfCharge: this.startStateOfCharge,
            altitude: this.altitude,
            dropSize: this.dropSize,
            liquidWaterContent: this.liquidWaterContent,
            temperature: this.temperature,
            windSpeed: this.windSpeed,
            windDirection: this.windDirection,
            relativeHumidity: this.relativeHumidity,
            timestep: this.timestep,
            xLabel: this.xLabel,
            yLabel: this.yLabel,
            title: this.title,
            xArray: this.xArray,
            weatherEffect: this.weatherEffect,
        }
        // Send the data to the API
        console.log(data)
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

