<template>
    <main>

        <h2>{{ t("temp.heading") }}</h2>

        <label for="celsius">Celsius</label>
        <input id="celsius" type="number" v-model="celsius" @input="emptyInputs('celsius')"/><span class="unit"> °C</span>

        <label for="fahrenheit">Fahrenheit</label>
        <input id="fahrenheit" type="number" v-model="fahrenheit" @input="emptyInputs('fahrenheit')" /><span class="unit"> °F</span>

        <button @click="calculateTemperature()">{{ t("temp.submit") }}</button>

    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {

        const {t} = useI18n({})

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
            t,
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
