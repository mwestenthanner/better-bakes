import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useReplacementStore = defineStore('replacement', () => {

    const toReplace = ref([
        {
            ingredient: "butter",
            replaceWith: "sunflower oil"
        },
        {
            ingredient: "fresh yeast",
            replaceWith: "active dry yeast"
        },
        {
            ingredient: "active dry yeast",
            replaceWith: "fresh yeast"
        },
        {
            ingredient: "baking soda",
            replaceWith: "baking powder"
        },
        {
            ingredient: "buttermilk",
            replaceWith: "yogurt"
        },
    ]);

    return {
        toReplace
    }

})