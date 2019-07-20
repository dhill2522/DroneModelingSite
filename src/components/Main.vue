<template>
    <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
    private msg = 'Main Window Component'
}
</script>
<style scoped>

</style>

