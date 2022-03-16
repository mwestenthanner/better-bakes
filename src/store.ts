import { ref, computed } from "vue";

const state = ref({

    ingredientList: [
        {
            name: 'all-purpose flour',
            gramsPerCm3: 0.529
        },
        {
            name: 'butter',
            gramsPerCm3: 0.959
        },
        {
            name: 'water',
            gramsPerCm3: 1
        },
        {
            name: 'sunflower oil',
            gramsPerCm3: 0.96
        },
        {
            name: 'granulated sugar',
            gramsPerCm3: 0.849
        },
        {
            name: 'brown sugar',
            gramsPerCm3: 0.823
        },
        {
            name: 'milk',
            gramsPerCm3: 1.035
        },
        {
            name: 'yogurt',
            gramsPerCm3: 1.06
        },
        {
            name: 'cocoa powder',
            gramsPerCm3: 0.641
        },
        {
            name: 'chocolate chips',
            gramsPerCm3: 0.72
        },
        {
            name: 'oats',
            gramsPerCm3: 0.432
        }
    ]
    
})


export const getIngredients = computed(() => state.value.ingredientList);

