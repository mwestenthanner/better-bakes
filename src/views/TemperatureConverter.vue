<template>
    <main>

        <h2>Temperature Converter</h2>

        <label for="celsius">Celsius</label>
        <input id="celsius" type="number" v-model="celsius" />

        <label for="fahrenheit">Fahrenheit</label>
        <input id="fahrenheit" type="number" />

        <button @click="calculateTemperature()">Convert</button>

        <p>{{ celsius }}</p>
        
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {

        let celsius = ref(null);
        let fahrenheit = ref(null);

        function calculateTemperature() {

            console.log(celsius);

        }

        return {
            celsius,
            fahrenheit,
            calculateTemperature
        }

    }

});
</script>

<style scoped>

</style>
