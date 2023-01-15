<template>
<main>
    <h2>{{ t("repl.heading") }}</h2>

    <label for="ingredient">{{ t("repl.select") }}</label>
    <Multiselect
        class="multi-select"
        id="ingredient"
        v-model="selectedIngredient"
        placeholder="Butter"
        label="name"
        :options="getOptions()"
        :searchable="true"
        @select="displayResult()"
    />

    <div class="result" v-if="result">
        {{ t('repl.replace') }}
        <p class="result-value">{{ t('ingr.' + replaceSelectedWith) }}</p>
        <p class="guide" v-if="te('repl.guides.' + selectedIngredient)">
            {{ t('repl.guides.' + selectedIngredient) }}
        </p>
    </div>
</main>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Multiselect from '@vueform/multiselect'
import { storeToRefs } from 'pinia';
import { useReplacementStore } from '@/stores/replacements';
import { ref } from 'vue';

const { t, te } = useI18n({ useScope: 'global' })
const { toReplace } = storeToRefs(useReplacementStore());

const selectedIngredient = ref();
const replaceSelectedWith = ref();
const result = ref(false);

function getOptions() {
    const options: { name: string; value: string; }[] = [];

    toReplace.value.forEach(element => {
        options.push({
            name: t('ingr.' + element.ingredient),
            value: element.ingredient
        }); 
    });

    return options;
}

function displayResult() {
    result.value = true;
    const ingredient = toReplace.value.find((entry) => entry.ingredient == selectedIngredient.value);
    replaceSelectedWith.value = ingredient?.replaceWith;
}
</script>

<style scoped>
.result {
    font-size: 110%;
    margin-bottom: 8rem;
    margin-top: 2rem;
}

.result-value {
    margin-top: 1rem;
    font-size: 200%;
}

.guide {
    margin-top: 2rem;
    line-height: 1.5;
}
</style>