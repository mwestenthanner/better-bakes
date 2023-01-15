import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUnitStore = defineStore('units', () => {

    const units = ref([
        {
            name: 'cups',
            baseUnitFactor: 236.588,
            isVolume: true
        },
        {
            name: 'grams',
            baseUnitFactor: 1,
            isVolume: false
        },
        {
            name: 'kilograms',
            baseUnitFactor: 1000,
            isVolume: false
        },
        {
            name: 'milliliters',
            baseUnitFactor: 1,
            isVolume: true
        },
        {
            name: 'ounces',
            baseUnitFactor: 28.3495,
            isVolume: false
        },
        {
            name: 'tsp',
            baseUnitFactor: 4.92892,
            isVolume: true
        },
        {
            name: 'tbsp',
            baseUnitFactor: 14.7868,
            isVolume: true
        },
        {
            name: 'sticks',
            baseUnitFactor: 118.294,
            isVolume: true,
            restrict: [
                'butter'
            ]
        },
    ]);

    return {
        units
    }

})