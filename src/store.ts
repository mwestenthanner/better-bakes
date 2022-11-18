import { createStore } from 'vuex'

const ingredientList = [
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

// The base unit is grams for weight and cm3 (milliliters) for volume
const units = [
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
]

export default createStore({
  state: {
    ingredientList,
    units,
  }, 
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})