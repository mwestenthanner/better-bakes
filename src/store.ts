import { ref, computed } from "vue";

const state = ref({

    ingredientList: [
        {
            name_en: 'all-purpose flour',
            name_de: 'Mehl',
            gramsPerCm3: 0.529
        } as {[key: string]: string | number },
        {
            name_en: 'butter',
            name_de: 'Butter',
            gramsPerCm3: 0.959
        },
        {
            name_en: 'water',
            name_de: 'Wasser',
            gramsPerCm3: 1
        },
        {
            name_en: 'sunflower oil',
            name_de: 'Sonnenblumenöl',
            gramsPerCm3: 0.96
        },
        {
            name_en: 'granulated sugar',
            name_de: 'Zucker (weiß oder Rohrzucker)',
            gramsPerCm3: 0.849
        },
        {
            name_en: 'brown sugar',
            name_de: 'Brauner Zucker (amerik.)',
            gramsPerCm3: 0.823
        },
        {
            name_en: 'milk',
            name_de: 'Milch',
            gramsPerCm3: 1.035
        },
        {
            name_en: 'yogurt',
            name_de: 'Joghurt',
            gramsPerCm3: 1.06
        },
        {
            name_en: 'cocoa powder',
            name_de: 'Kakaopulver',
            gramsPerCm3: 0.641
        },
        {
            name_en: 'chocolate chips',
            name_de: 'Schokodrops',
            gramsPerCm3: 0.72
        },
        {
            name_en: 'oats',
            name_de: 'Haferflocken',
            gramsPerCm3: 0.432
        }
    ]
    
})


export const getIngredients = computed(() => state.value.ingredientList);

