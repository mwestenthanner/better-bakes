<template>
    <main>
        <h2>Pan Size Converter</h2>
        <Input :labelText="'Radius/length of pan in recipe'" :inputType="'number'"></Input>
        <Input :labelText="'Radius/length of desired pan'" :inputType="'number'"></Input>
        <Select :labelText="'Select pan type'" :selectName="'pan-type'" :selectOptions="options"></Select>
        <Button :buttonText="'Calculate'" @click="calculateRatio()"></Button>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '../components/Input.vue'
import Select from '../components/Select.vue'
import Button from '../components/Button.vue'

export default defineComponent({
    components: {
        Input,
        Select,
        Button
    },
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
