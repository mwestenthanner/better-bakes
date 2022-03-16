<template>
    <div class="select">
        <label for="input">{{ labelText }}</label>
        <select :name="selectName" :id="selectName">
            <option v-for="option in selectOptions" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        selectName: {
            type: String,
            required: true  
        },
        selectOptions: {
            type: Object as PropType<Array<string>>,
            required: true
        },
        labelText: {
            type: String,
            required: false    
        }
    }
});
</script>

<style scoped>

select {
    padding: 0.75rem;
    background-color: var(--field-background);
    border-radius: 0.5rem;
    border: none;
    font-size: 110%;
    width: 100%;
    box-sizing: border-box;
    border-right: 1rem solid transparent
}

</style>
