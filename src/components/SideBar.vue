<template>
    <div>
        <h2>Drone Modeling</h2>
        <hr>
        <div class="form-holder">
            <div class="form-row">
                <label>Drone Name</label>
                <select v-model="params.droneName">
                    <option v-for="drone of drones" v-bind:key="drone.id">{{ drone.id }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>Validation Case</label>
                <select v-model="params.validationCase">
                    <option v-for="v of validationCases" v-bind:key="v.id">{{ v.id }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>Battery Technology</label>
                <select v-model="params.batteryTechnology">
                    <option v-for="tech of batteryTechnologies" v-bind:key="tech.id">{{ tech.name }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>State Of Health (%)</label>
                <input type="range" v-model="params.stateOfHealth">
            </div>
            <div class="form-row">
                <label>Initial Charge (%)</label>
                <input type="range" v-model="params.startStateOfCharge">
            </div>
            <div class="form-row">
                <label>ASL Altitude (m)</label>
                <input type="number" v-model="params.altitude">
            </div>
            <div class="form-row">
                <label>Droplet Size (mm)</label>
                <input type="range" v-model="params.dropSize">
            </div>
            <div class="form-row">
                <label>Liquid Water Content (kg/m^3)</label>
                <input type="range" min="0" max="1" step="0.1" v-model="params.liquidWaterContent">
            </div>
            <div class="form-row">
                <label>Temperature (C)</label>
                <input type="number" v-model="params.temperature">
            </div>
            <div class="form-row">
                <label>Wind Speed (m/s)</label>
                <input type="range" min="0" max="50" v-model="params.windSpeed">
            </div>
            <div class="form-row">
                <label>Wind Direction (degrees)</label>
                <input type="range" max="360" min="0" v-model="params.windDirection">
            </div>
            <div class="form-row">
                <label>Relative Humidity (%)</label>
                <input type="range" v-model="params.relativeHumidity">
            </div>
        </div>
        <button @click="simulate()">Simulate</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { independentVariables, yVariables, batteryTypes } from '../data'
import { yVariable, Params, ValidationCase } from '../models'
import { backendService } from '../services'

@Component
export default class SideBar extends Vue {
    private params: Params = {
        droneName: 'dji-Mavic2',
        batteryTechnology: 'current',
        stateOfHealth: 100.0,
        altitude: 0.0,
        dropSize: 0.0,
        liquidWaterContent: 50.0,
        temperature: 25.0,
        windSpeed: 0.0,
        windDirection: 0.0,
        relativeHumidity: 0.0,
        timestep: 0,
        xLabel: independentVariables[0],
        yLabel: yVariables[0],
        title: '',
        xVals: [0, 1],
        weatherEffect: 'temperature',
        validation: false,
        validationCase: 'None',
        startStateOfCharge: 100.0,
        zParam: '',
    }
    private batteryTechnologies = batteryTypes
    private drones: any[] = []
    private validationCases: ValidationCase[] = []
    private backendService = backendService

    private simulate(): void {
        backendService.simulate(this.params)
    }

    private mounted(): void {
        this.backendService.getDrones().then((data) => {
            this.drones = data
        })
        this.backendService.getValidationCases().then((data) => {
            this.validationCases = data
        })
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

