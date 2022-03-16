<template>
    <main>

        <h2>Pan Size Converter</h2>

        <label for="original">Original radius/length</label>
        <input id="original" type="number" />

        <label for="result">Desired radius/length</label>
        <input id="result" type="number" />

        <label for="input">Select pan type:</label>
        <select name="pan-type" id="pan-type">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <button @click="calculateRatio()">Convert</button>
        
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {

        const options = [
            'Round',
            'Square',
            'Loaf',
            'Bundt'
        ];

        function calculateRatio() {
            console.log('calculating...');
        }

        return {
            options,
            calculateRatio
        }

    }

});
</script>

<style scoped>

</style>
