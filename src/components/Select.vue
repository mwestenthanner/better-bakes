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

<style>

</style>
