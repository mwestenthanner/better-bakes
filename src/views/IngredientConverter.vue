<template>
    <main>
        <h2>Ingredient Converter</h2>

        <label for="ingredient">Select ingredient:</label>
        <select name="ingredient" id="ingredient">
            <option v-for="option in sampleIngredients" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <label for="quantity">Quantity:</label>
        <input id="quantity" type="number" />

        <label for="original-unit">Convert from...</label>
        <select name="original-unit" id="original-unit">
            <option v-for="option in units" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <label for="convert-unit">...to:</label>
        <select name="convert-unit" id="convert-unit">
            <option v-for="option in units" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>   

        <button>Convert</button>

        <div class="result">
            <p>2 cups flour is approximately <strong>240 grams</strong>.</p>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

.result {
    font-size: 110%;
    margin-top: 2rem;
}

</style>
