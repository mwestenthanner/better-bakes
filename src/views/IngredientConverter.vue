<template>
    <main>
        <h2>{{ t("ingredients.heading") }}</h2>

        <label for="ingredient">{{ t("ingredients.select") }}</label>
        <Multiselect
            class="multi-select"
            id="ingredient"
            v-model="ingredient"
            :options="getLabelValuePair(ingredients, 'ingr')"
            :searchable="true"
            :required="true"
            @input="convert()"
        />

        <label for="quantity">{{ t("ingredients.quantity") }}</label>
        <input id="quantity" type="number" v-model="quantity" @input="convert()" required />

        <label for="before-unit">{{ t("ingredients.from") }}</label>
        <Multiselect
            class="multi-select"
            id="before-unit"
            v-model="beforeUnit"
            :options="getLabelValuePair(units, 'units')"
            :searchable="true"
            :required="true"
            @select="convert()"
        />

        <div class="control">
            <button class="switch-button" type="button" @click="reverseUnits()">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </button>
            <label for="after-unit">{{ t("ingredients.to") }}</label>
        </div>
       
        <Multiselect
            class="multi-select"
            id="after-unit"
            v-model="afterUnit"
            :options="getLabelValuePair(units, 'units')"
            :searchable="true"
            @select="convert()"
        />

        <button @click="convert()" type="submit">{{ t("ingredients.submit") }}</button>

        <div class="result" v-if="!isNaN(result)">
            <p>{{ quantity }} {{ t('units.' + beforeUnit) }} {{ t('ingr.' + ingredient) }} {{ t("ingredients.result") }} <span class="emphasized">{{ result.toFixed(1) }} {{ t('units.' + afterUnit) }}</span>.</p>
        </div>

    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'
import Multiselect from '@vueform/multiselect'

const { t, te } = useI18n({ useScope: 'global' })
const store = useStore();

const ingredient = ref();
const quantity = ref();
const beforeUnit = ref('cups');
const afterUnit = ref('grams');
const result = ref();

const ingredients = store.state.ingredientList;
const units = store.state.units;

function getLabelValuePair(objects: Array<any>, translationPrefix?: string) {
    if (!translationPrefix) {
        translationPrefix = "";
    }
    return objects.map((element: Record<string, any>) => {
        return {
            value: element.name,
            label: te(translationPrefix + "." + element.name) ? t(translationPrefix + "." + element.name) : element.name
        }
    }).sort((a, b) => {
        if (a.label < b.label) {
            return -1;
        }
        if (a.label > b.label) {
            return 1;
        }
        return 0;
    });
}


function convert() {
    const selectedIngredient = ingredients.find((element: { name: string; }) => element.name == ingredient.value);
    const before = units.find((element: { name: string; }) => element.name == beforeUnit.value);
    const after = units.find((element: { name: string; }) => element.name == afterUnit.value);
    const volumeToWeight = selectedIngredient?.gramsPerCm3 as number ?? 1;

    // convert if both are volume or both are weight
    if (before.isVolume == after.isVolume) {
        result.value = quantity.value * before.baseUnitFactor / after.baseUnitFactor;
    // convert volume to weight
    } else if (before.isVolume && !after.isVolume) {
        result.value = quantity.value * before.baseUnitFactor * volumeToWeight / after.baseUnitFactor;
    // convert weight to volume
    } else result.value = quantity.value * before.baseUnitFactor / volumeToWeight / after.baseUnitFactor;
}

function reverseUnits() {
    const before = beforeUnit.value;
    const after = afterUnit.value;

    beforeUnit.value = after;
    afterUnit.value = before;
}

function checkAndConvert() {
    if (!ingredient.value) {
        document.getElementById('ingredient')?.classList.add("warning")
    } else if (!quantity.value) {
        //
    } else if (!beforeUnit.value) {
        //
    } else if (!afterUnit.value) {
        //
    } else convert();
}

</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>

.multi-select, button[type=submit] {
    margin-bottom: 1rem;
}s

input[type=number] {
    appearance: textfield;
}

.control {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem 0;
}

.control label {
    margin: 0;
}

.switch-button {
    background-color: transparent;
    width: fit-content;
    stroke: var(--main-accent);
    padding: 0;
}

.result {
    font-size: 110%;
    margin-top: 2rem;
}

.emphasized {
    font-size: 200%;
}

.emphasized:before {
    content: ' '; 
    display: block;
}

#ingredient {
    z-index: 5;
}

#before-unit {
    z-index: 4;
}
</style>
