<template>
    <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Plot extends Vue {
    private msg = 'Plot Component'
}
</script>
<style>

</style>

