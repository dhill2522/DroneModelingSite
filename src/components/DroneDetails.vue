<template>
    <div>
        {{ drone.id }}
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prop of droneProps" v-bind:key="prop.prop">
                    <td>{{ prop.prop }}</td>
                    <td>{{ prop.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Drone } from '../models'
import { backendService } from '../services'

@Component({
    components: {},
})
export default class DroneDetails extends Vue {
    private drone: any = { 'Drone Name': 'Please select a drone'}
    private droneProps: {prop: string, value: any}[] = []

    private mounted() {
        backendService.eventEmitter.on('drone', (droneData) => {
            this.drone = droneData
            this.parseDroneData()
        })
        this.drone = backendService.getSelectedDrone()
        this.parseDroneData()
    }

    private parseDroneData(): void {
        this.droneProps = []
        let i = 0
        Object.keys(this.drone).forEach((key) => {
            const prop = {
                id: i,
                prop: key,
                value: this.drone[key] as string
            }
            this.droneProps.push(prop)
            i++
        })
    }
}
</script>
<style scoped>

</style>

