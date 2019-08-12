<template>
    <div>
        <div id="plot"></div>
        <div v-if="dataLoaded">
            <select v-model="xAxisLabel" @change="updatePlot()">
                <option v-for="opt of xAxisOptions" :value="opt.id" v-bind:key="opt.id">{{ opt.displayName }}</option>
            </select>

        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Plotly from 'plotly.js'
import { Plottable, Response, IndependentVariable } from '../models'
import { backendService } from '../services'
import { independentVariables } from '../data'

@Component
export default class Plot extends Vue {
    private emptyPlottable = { id: '', values: [], displayName: ''}
    private dataLoaded = false
    private plotId = 'plot'
    private plotData: Array<Partial<Plotly.PlotData>> = []
    private layout: Partial<Plotly.Layout> = {}
    private xAxisOptions: Plottable[] = []
    private xAxisLabel = ''
    private xAxis: Plottable = this.emptyPlottable
    private yAxisOptions: Plottable[] = []

    private mounted(): void {
        Plotly.newPlot(this.plotId, this.plotData)
            .then((plotElement) => {
                window.addEventListener('resize', () => {
                    Plotly.Plots.resize(this.plotId)
                })
            })
        backendService.eventEmitter.on('simulateComplete', () => {
            this.processSimulationResults()
        })
    }

    private updatePlot(): void {
        const xOption = this.xAxisOptions.find((el) => el.displayName === this.xAxisLabel)
        this.xAxis = xOption ? xOption : this.emptyPlottable
        console.log(this.xAxis)
        this.plotData = []
        this.yAxisOptions.forEach((opt) => {
            this.plotData.push({
                x: this.xAxis.values[0],
                y: opt.values[0],
                mode: 'lines',
                type: 'scatter',
                name: opt.displayName,
                visible: 'legendonly'
            })
        })
        Plotly.newPlot(this.plotId, this.plotData, this.layout)
    }

    private processSimulationResults(): void {
        this.dataLoaded = true
        const data: Response = backendService.simulationResults
        this.yAxisOptions = []
        this.xAxisOptions = []
        data.plottables.forEach((plottable) => {
            if (plottable.values[0][0] !== null) {
                this.yAxisOptions.push(plottable)
                if (independentVariables.find( el => el.name === plottable.id as IndependentVariable)) {
                    this.xAxisOptions.push(plottable)
                }
            } else { console.log('Null values:', plottable)}
        })
        console.log('backendService.selectedXLabel', backendService.selectedXLabel)
        if (backendService.selectedXLabel) {
            this.xAxisLabel = backendService.selectedXLabel
            // const selectedX = this.xAxisOptions.find(el => el.id === backendService.selectedXLabel)
            // console.log('selectedX', selectedX) 
            // if (selectedX) { this.xAxis = selectedX } else { this.xAxis = this.xAxisOptions[0]}
            // this.xAxis = this.xAxisOptions[0] 
        }
        // this.xAxisLabel = this.xAxis.displayName

        this.layout = {
            title: 'Simulation Results'
        }

        this.updatePlot()
    }
}
</script>
<style>

</style>
