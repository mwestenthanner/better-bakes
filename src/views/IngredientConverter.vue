<template>
    <main>
        <h2>{{ t("ingredients.heading") }}</h2>

        <label for="ingredient">{{ t("ingredients.select") }}</label>
        <select @change="convert()" name="ingredient" id="ingredient" v-model="ingredient">
            <option v-for="option in ingredientList" :key="option" :value="option">{{ option }}</option>
        </select>

        <label for="quantity">{{ t("ingredients.quantity") }}</label>
        <input @change="convert()" id="quantity" type="number" v-model="quantity" />

        <label for="before-unit">{{ t("ingredients.from") }}</label>
        <select @change="convert()" name="before-unit" id="before-unit" v-model="beforeUnit">
            <option v-for="option in units" :key="option" :value="option.toLowerCase()">{{ t('units.' + option) }}</option>
        </select>

        <label for="after-unit">{{ t("ingredients.to") }}</label>
        <select @change="convert()" name="after-unit" id="after-unit" v-model="afterUnit">
            <option v-for="option in units" :key="option" :value="option.toLowerCase()">{{ t('units.' + option) }}</option>
        </select>   

        <button @click="convert()">{{ t("ingredients.submit") }}</button>

        <div class="result" v-if="!isNaN(result)">
            <p>{{ quantity }} {{ t('units.' + beforeUnit) }} {{ ingredient }} {{ t("ingredients.result") }} <strong>{{ result.toFixed(1) }} {{ t('units.' + afterUnit) }}</strong>.</p>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getIngredients } from '../store'
import { useI18n } from 'vue-i18n'

export default defineComponent({
    setup() {

        const { t, locale } = useI18n({ useScope: 'global' })

        const ingredient = ref(t("ingredients.default"));
        const quantity = ref();
        const beforeUnit = ref('cups');
        const afterUnit = ref('grams');
        const result = ref();

        const ingredientList = ref(getIngredients.value.map(item => item[localizeName()] ?? '').sort());
        const ingredients = getIngredients.value;

        const units = [
            'cups',
            'grams',
            'kilograms',
            'milliliters',
            'ounces',
            'tsp',
            'tbsp'
        ]

        function localizeName() {
            return 'name_' + locale.value;
        }

        function convert() {

            const selectedIngredient = ingredients.find(element => element[localizeName()] == ingredient.value);
            const factor = selectedIngredient?.gramsPerCm3 as number ?? 1;

            const volumeUnits = [
                'cups',
                'milliliters',
                'tsp',
                'tbsp'
            ]

            const weightUnits = [
                'grams',
                'kilograms',
                'ounces'
            ]


            switch (true) {
                case (volumeUnits.includes(beforeUnit.value) && volumeUnits.includes(afterUnit.value)):

                    result.value = convertCm3ToVolumeUnit(convertVolumeToCm3(quantity.value, beforeUnit.value), afterUnit.value);
                    break;

                case volumeUnits.includes(beforeUnit.value) && weightUnits.includes(afterUnit.value):

                    result.value = convertGramsToWeightUnit(convertVolumeToCm3(quantity.value, beforeUnit.value) * factor, afterUnit.value)
                    break;

                case weightUnits.includes(beforeUnit.value) && volumeUnits.includes(afterUnit.value):

                    result.value = convertCm3ToVolumeUnit(convertWeightToGrams(quantity.value, beforeUnit.value) / factor, afterUnit.value)
                    break;

                case weightUnits.includes(beforeUnit.value) && weightUnits.includes(afterUnit.value):

                    result.value = convertGramsToWeightUnit(convertWeightToGrams(quantity.value, beforeUnit.value), afterUnit.value);
                    break;
            }

        }

        function convertVolumeToCm3(volume: number, unit: string) {
            const cupValue = 236.5882365;
            const tbspValue = 14.79;
            const tspValue = 4.9289;

            switch(unit) {
                case 'cups':
                    return volume * cupValue;
                case 'tbsp':
                    return volume * tbspValue;
                case 'tsp':
                    return volume * tspValue;
                default:
                    return volume;
            }
        }

        function convertCm3ToVolumeUnit(cm3: number, unit: string) {
            const cupValue = 236.5882365;
            const tbspValue = 14.79;
            const tspValue = 4.9289;

            switch(unit) {
                case 'cups':
                    return cm3 / cupValue;
                case 'tbsp':
                    return cm3 / tbspValue;
                case 'tsp':
                    return cm3 / tspValue;
                default:
                    return cm3;
            }
        }

        function convertWeightToGrams(weight: number, unit: string) {
            const ozValue = 28.34952
            const kgValue = 1000

            switch(unit) {
                case 'ounces':
                    return weight * ozValue;
                case 'kilograms':
                    return weight * kgValue;
                default:
                    return weight;
            }
        }

        function convertGramsToWeightUnit(grams: number, unit: string) {
            const ozValue = 28.34952
            const kgValue = 1000

            switch(unit) {
                case 'ounces':
                    return grams / ozValue;
                case 'kilograms':
                    return grams / kgValue;
                default:
                    return grams;
            }
        }


        return {
            t,
            ingredientList,
            units,
            ingredient,
            quantity,
            beforeUnit,
            afterUnit,
            result,
            convert
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
