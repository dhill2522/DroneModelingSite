<template>
    <div>
        <Plot></Plot>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Plot from './Plot.vue'
import { backendService } from '../services'


@Component({
    components: {
        Plot,
    },
})
export default class Main extends Vue {
}
</script>
<style scoped>

</style>

