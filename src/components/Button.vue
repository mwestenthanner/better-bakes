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

<style scoped>

button {
    padding: 0.75rem;
    background-color: var(--accent-turquoise);
    color: white;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    font-size: 110%;
}

</style>
