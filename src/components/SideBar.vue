<template>
    <div class="sideToolBar">
        <div class="static">
            <h2>Drone Modeling</h2>
            <hr style="margin: unset; padding-top: 1 rem;">
        </div>
        <div class="form-holder dynamic">
            <div class="form-row">
                <label>Drone Name</label>
                <select 
                    v-model="params.droneName" 
                    @change="updateDrone($event.target.value)"
                    :disabled="params.validation">
                    <option v-if="params.validation">From Validation Data</option>
                    <option v-for="drone of drones" v-bind:key="drone['Drone Name']">{{ drone['Drone Name'] }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>Validation Case</label>
                <select v-model="params.validationCase" @change="setValidation($event.target.value)">
                    <option v-for="v of validationCases" v-bind:key="v.id">{{ v.id }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>Battery Technology</label>
                <select v-model="params.batteryTechnology" :disabled="params.validation">
                    <option v-for="tech of batteryTechnologies" v-bind:key="tech.id">{{ tech.name }}</option>
                </select>
            </div>
            <div class="form-row">
                <label>State Of Health: {{ params.stateOfHealth }}%</label>
                <input type="range" min="50" max="100" step="1" 
                    v-model="params.stateOfHealth" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Initial Charge: {{ params.startStateOfCharge }}%</label>
                <input type="range" min="0" max="100" step="1" 
                    v-model="params.startStateOfCharge" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>ASL Altitude (m)</label>
                <input type="number" min="0" max="10000" 
                    v-model="params.altitude" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Droplet Size: {{ params.dropSize }} mm</label>
                <input type="range" min="0" max="10" step="0.1" v-model="params.dropSize">
            </div>
            <div class="form-row">
                <label>Liquid Water Content: {{ params.liquidWaterContent }} g/m³</label>
                <input type="range" min="0" max="20" step="1" 
                    v-model="params.liquidWaterContent" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Temperature (C)</label>
                <input type="number" min="-10" max="45" step="1" 
                    v-model="params.temperature" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Wind Speed: {{ params.windSpeed }} m/s</label>
                <input type="range" min="0" max="20" step="1" 
                    v-model="params.windSpeed" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Wind Direction: {{ params.windDirection }} degrees</label>
                <input type="range" max="360" min="0" step="1" 
                    v-model="params.windDirection" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Relative Humidity: {{ params.relativeHumidity }}%</label>
                <input type="range" min="0" max="100" step="1" 
                    v-model="params.relativeHumidity" :disabled="params.validation">
            </div>
            <div class="form-row">
                <label>Manipulated Variable</label>
                <select 
                    v-model="params.xLabel" 
                    :disabled="params.validation"
                    @change="updateXLabel($event)">
                    <option 
                        v-for="variable of independentVariables" 
                        :key="variable.name"
                        :value="variable.name">{{ variable.display }}</option>
                </select>
            </div>
        </div>
        <div class="static">
            <hr style="margin: unset; padding-bottom: 1 rem;">
            <button @click="simulate()">Simulate</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { independentVariables, yVariables, batteryTypes } from '../data'
import { yVariable, Params, ValidationCase, IndependentVariable } from '../models'
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
        timestep: 0.1,
        xLabel: independentVariables[0].name,
        yLabel: yVariables[0],
        title: '',
        xVals: [0, 1, 2, 3, 4, 5],
        weatherEffect: 'temperature',
        validation: false,
        validationCase: 'None',
        startStateOfCharge: 100.0,
        zParam: '',
    }
    private batteryTechnologies = batteryTypes
    private drones: any[] = []
    private independentVariables = independentVariables
    private validationCases: ValidationCase[] = []

    private simulate(): void {
        backendService.simulate(this.params)
    }

    private mounted(): void {
        backendService.getDrones().then((data) => {
            this.drones = data
            this.updateDrone(this.params.droneName)
        })
        backendService.getValidationCases().then((data) => {
            this.validationCases = data
        })
    }

    private updateDrone(droneName: string): void {
        backendService.setSelectedDrone(droneName)
    }

    private updateXLabel(event: any): void {
        console.log('updated xLabel', event)
        this.params.xLabel = event.target.value as IndependentVariable
    }

    private setValidation(vcase: string): void {
        const validationCase = this.validationCases.find(c => c.id === vcase)
        if (vcase === 'None') {
            this.params.validation = false
            this.params.droneName = 'dji-Mavic2'
        } else if (validationCase) {
            this.params.validation = true
            this.params.droneName = 'From Validation Data'
            this.params.batteryTechnology = validationCase.settings.batterytechnology
            this.params.stateOfHealth = validationCase.settings.stateofhealth
            this.params.startStateOfCharge = validationCase.settings.startstateofcharge
            this.params.altitude = validationCase.settings.altitude
            this.params.dropSize = validationCase.settings.dropsize
            this.params.liquidWaterContent = validationCase.settings.liquidwatercontent
            this.params.temperature = validationCase.settings.temperature
            this.params.windSpeed = validationCase.settings.windspeed
            this.params.windDirection = validationCase.settings.winddirection
            this.params.relativeHumidity = validationCase.settings.relativehumidity
            this.params.xLabel = validationCase.settings.xlabel
        } else {
            this.params.validation = false
        }
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

.sideToolBar {
    display: flex;
    flex-direction: column;
    min-height: 600px;
}

.static {
    flex-grow: 0;
    flex-shrink: 0;
    height: 58px;
}

.dynamic {
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
}

div.form-row > label {
    margin-right: 8px;
}

</style>
