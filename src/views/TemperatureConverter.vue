<template>
    <main>

        <h2>Temperature Converter</h2>

        <label for="celsius">Celsius</label>
        <input id="celsius" type="number" v-model="celsius" @input="emptyInputs('celsius')"/><span class="unit"> °C</span>

        <label for="fahrenheit">Fahrenheit</label>
        <input id="fahrenheit" type="number" v-model="fahrenheit" @input="emptyInputs('fahrenheit')" /><span class="unit"> °F</span>

        <button @click="calculateTemperature()">Convert</button>

    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {

        let celsius = ref();
        let fahrenheit = ref();

        function calculateTemperature() {

            if (isNaN(celsius.value) && !isNaN(fahrenheit.value)) {

                console.log(celsius.value);

                celsius.value = (fahrenheit.value - 32) * 5/9;

            } else if (!isNaN(celsius.value) && isNaN(fahrenheit.value)) {
                
                fahrenheit.value = celsius.value * 1.8 + 32

            } 

        }

        function emptyInputs(input: string) {

            if (input == 'celsius') {
                fahrenheit.value = undefined;
            }

            if (input == 'fahrenheit') {
                celsius.value = undefined;
            }

        }

        return {
            celsius,
            fahrenheit,
            calculateTemperature,
            emptyInputs
        }

    }

});
</script>

<style scoped>

input {
    display: inline-block;
    width: 90%;
}

</style>
