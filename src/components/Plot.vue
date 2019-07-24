<template>
    <div>
        <div id="plot"></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Plotly from 'plotly.js'

@Component
export default class Plot extends Vue {
    private msg = 'Plot Component'
    private plotId = 'plot'
    private plotData: Partial<Plotly.PlotData>[] = [
    ]

    private mounted(): void {
        Plotly.newPlot(this.plotId, this.plotData)
    }
}
</script>
<style>

</style>
