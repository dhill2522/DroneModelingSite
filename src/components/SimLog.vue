<template>
    <div>
        Simulation Log
        <div>
            <ul>
                <div v-for="el of log.log" :key=el.xvalue>
                    <li>X: {{el.xvalue}} Y: {{el.zvalue}} insert data here</li>
            
                </div>
            </ul>
        </div>
        
    </div>
    
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { backendService } from '../services'


@Component({
    components: {},
})

export default class SimLog extends Vue {
    public log: any = []
    private mounted() {
        backendService.eventEmitter.on('simulateComplete', () => {
            this.log = backendService.simulationLog
        }) 

        this.log = backendService.simulationLog
    }
}
</script>
<style scoped>

</style>

