<template>
    <div>
        <div id="plot"></div>
        <div v-if="dataLoaded">
            <select v-model="xAxisLabel" @change="updatePlot()">
                <option v-for="opt of xAxisOptions" v-bind:key="opt.id">{{ opt.displayName }}</option>
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
    private plotId = 'plot'
    private dataLoaded = false
    private plotData: Array<Partial<Plotly.PlotData>> = []
    private xAxisOptions: Plottable[] = []
    private xAxisLabel = ''
    private xAxis: Plottable = this.emptyPlottable
    private yAxisOptions: Plottable[] = []

    private mounted(): void {
        Plotly.newPlot(this.plotId, this.plotData)
        backendService.eventEmitter.on('simulateComplete', () => {
            this.processSimulationResults()
        })
    }

    private updatePlot(): void {
        const xOption = this.xAxisOptions.find((el) => el.displayName === this.xAxisLabel)
        this.xAxis = xOption ? xOption : this.emptyPlottable
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
        const layout: Partial<Plotly.Layout> = {
            title: 'Ryan is Awesome!',
        }
        Plotly.newPlot(this.plotId, this.plotData, layout)
    }

    private processSimulationResults(): void {
        this.dataLoaded = true
        const data: Response = backendService.simulationResults
        this.yAxisOptions = []
        this.xAxisOptions = []
        data.plottables.forEach((plottable) => {
            this.yAxisOptions.push(plottable)
            if (independentVariables.includes(plottable.id as IndependentVariable)) {
                this.xAxisOptions.push(plottable)
            }
        })
        if (this.xAxisOptions) { this.xAxis = this.xAxisOptions[0] }
        this.xAxisLabel = this.xAxis.displayName
        this.updatePlot()
    }
}
</script>
<style>

</style>
