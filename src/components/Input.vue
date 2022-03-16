<template>
    <div class="input">
        <label for="input">{{ labelText }}</label>
        <input :type="inputType">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        inputType: {
            type: String,
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

input {
    padding: 0.75rem;
    background-color: var(--field-background);
    border-radius: 0.5rem;
    border: none;
    font-size: 110%;
    width: 100%;
    box-sizing: border-box;
}

</style>
