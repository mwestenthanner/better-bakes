<template>
    <main>
        <h2>Temperature Converter</h2>
        <Input :labelText="'Celsius'" :inputType="'number'"></Input>
        <Input :labelText="'Fahrenheit'" :inputType="'number'"></Input>
        <Button :buttonText="'Calculate'" @click="calculateTemperature()"></Button>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default defineComponent({
    components: {
        Input,
        Button
    },
    setup() {

        function calculateTemperature() {

            const celsius = 0;
            const fahrenheit = celsius * 1.8 + 32;

            return fahrenheit;

        }

        return {
            calculateTemperature
        }

    }

});
</script>

<style scoped>

</style>
