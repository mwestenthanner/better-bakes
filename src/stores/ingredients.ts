import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useIngredientStore = defineStore('ingredients', () => {

    const ingredients = ref([
        {
            name: 'all-purpose flour',
            gramsPerCm3: 0.529,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'butter',
            gramsPerCm3: 0.959,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'water',
            gramsPerCm3: 1,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'sunflower oil',
            gramsPerCm3: 0.96,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'granulated sugar',
            gramsPerCm3: 0.849,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'brown sugar',
            gramsPerCm3: 0.823,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'milk',
            gramsPerCm3: 1.035,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'yogurt',
            gramsPerCm3: 1.06,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'cocoa powder',
            gramsPerCm3: 0.641,
            defaultFrom: 'tbsp',
            defaultTo: 'grams'
        },
        {
            name: 'chocolate chips',
            gramsPerCm3: 0.72,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'oats',
            gramsPerCm3: 0.432,
            defaultFrom: 'cups',
            defaultTo: 'grams'
        },
        {
            name: 'fresh yeast',
            gramsPerCm3: 1.36,
            defaultFrom: 'tsp',
            defaultTo: 'grams'
        },
        {
            name: 'active dry yeast',
            gramsPerCm3: 0.81,
            defaultFrom: 'tsp',
            defaultTo: 'grams'
        },
        {
            name: 'baking powder',
            gramsPerCm3: 0.721,
            defaultFrom: 'tsp',
            defaultTo: 'grams'
        },
    ]);

    return {
        ingredients
    }

})