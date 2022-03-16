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

<style>

</style>
