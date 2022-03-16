<template>
    <div class="button">
        <button>{{ buttonText }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        buttonText: {
            type: String,
            required: true
        }
    }
});
</script>

<style>

</style>
