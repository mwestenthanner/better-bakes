<template>
    <main>
        <h2>Ingredient Converter</h2>
        <Select :labelText="'Choose ingredient'" :selectName="'ingredient'" :selectOptions="sampleIngredients"></Select>
        <Input :labelText="'Quantity'" :inputType="'number'"></Input>
        <Select :labelText="'Calculate from...'" :selectName="'from'" :selectOptions="units"></Select>
        <Select :labelText="'...to:'" :selectName="'to'" :selectOptions="units"></Select>
        <Button :buttonText="'Calculate'"></Button>
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

        const sampleIngredients = [
            'Flour',
            'White Sugar',
            'Eggs'
        ]

        const units = [
            'cups',
            'grams', 
            'ounces',
            'milliliters'
        ]

        return {
            sampleIngredients,
            units
        }

    }

});
</script>

<style scoped>

</style>
