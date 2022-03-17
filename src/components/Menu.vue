<template>
    <div class="menu">
        <router-link to="/">
            <div class="menu-item" :class="{ selected : currentRoute == 'Ingredients' }">
                <svg data-name="016_FOOD" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M9.54,21.38C5.31,21.38,2,19.52,2,17.14c0-2.16,1.82-2.8,3.58-3.41a18,18,0,0,0,3-1.28,1,1,0,0,1,1,1.74,19.78,19.78,0,0,1-3.33,1.42c-1.91.67-2.24.9-2.24,1.53,0,.9,2.21,2.24,5.54,2.24.28,0,.56,0,.85,0a1,1,0,0,1,1.06.93,1,1,0,0,1-.93,1.06Z"/><path class="cls-1" d="M15,20.32a5.08,5.08,0,0,1-3.59-1.72C8.31,15.47,7.78,12.27,10,10A4.6,4.6,0,0,1,12.3,8.74a.82.82,0,0,1,.09-.19,18.14,18.14,0,0,0,1.27-3c.63-1.78,1.27-3.63,3.48-3.63A3.67,3.67,0,0,1,20,4a11,11,0,0,1,.46,10.31,1.07,1.07,0,0,1-1.73.31L17.09,13a7.57,7.57,0,0,0-3.08-2,2.33,2.33,0,0,0-2.48.62c-1.8,1.81.12,4.26,1.42,5.56,1.45,1.46,2.69,1.46,4.14,0a5.85,5.85,0,0,0,.71-.78,1.07,1.07,0,0,1,1.5-.21,1.06,1.06,0,0,1,.21,1.49,8.07,8.07,0,0,1-.93,1A5.08,5.08,0,0,1,15,20.32ZM14.64,8.87a9.88,9.88,0,0,1,4,2.57l.45.45a8.73,8.73,0,0,0-.7-6.5c-.53-.95-1.06-1.3-1.22-1.32-.59,0-.81.33-1.46,2.2A23.37,23.37,0,0,1,14.64,8.87Z"/></svg>
                <p>{{ t("menu.ingr") }}</p>
            </div>
        </router-link>
        <router-link to="/temperature">
            <div class="menu-item" :class="{ selected : currentRoute == 'Temperature' }">
                <svg data-name="016_FOOD" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M12,22a4,4,0,0,1-3.39-1.9,2.31,2.31,0,0,1-.87.13,4,4,0,0,1-4-4,3.8,3.8,0,0,1,.11-1A3.75,3.75,0,0,1,2,12,4,4,0,0,1,3.9,8.61a2.31,2.31,0,0,1-.13-.87A4,4,0,0,1,4.93,4.93a4,4,0,0,1,3.76-1A3.75,3.75,0,0,1,12,2a4,4,0,0,1,3.39,1.9,2.31,2.31,0,0,1,.87-.13,4,4,0,0,1,4,4,3.8,3.8,0,0,1-.11.95A3.75,3.75,0,0,1,22,12a4,4,0,0,1-1,2.66,1,1,0,0,1-1.49-1.34A2,2,0,0,0,20,12a2,2,0,0,0-.95-1.69,1.93,1.93,0,0,1-.93-1.64,1.82,1.82,0,0,1,.06-.46,2.42,2.42,0,0,0,.05-.47,2,2,0,0,0-.57-1.4,2,2,0,0,0-1.87-.52A1.92,1.92,0,0,1,13.69,5a2,2,0,0,0-3.38,0,1.93,1.93,0,0,1-2.1.87,2,2,0,0,0-1.87.52,2,2,0,0,0-.57,1.4,2.61,2.61,0,0,0,.05.48,1.68,1.68,0,0,1,.06.45A1.91,1.91,0,0,1,5,10.31a2,2,0,0,0,0,3.38,1.93,1.93,0,0,1,.93,1.64,1.82,1.82,0,0,1-.06.46,2.42,2.42,0,0,0-.05.47,2,2,0,0,0,.57,1.4,2,2,0,0,0,1.87.52,1.94,1.94,0,0,1,2.1.87,2,2,0,0,0,3.38,0,1.93,1.93,0,0,1,2.1-.87,2,2,0,0,0,1.87-.52,2.21,2.21,0,0,0,.41-.6,1,1,0,0,1,1.83.81,4,4,0,0,1-4.59,2.25A3.75,3.75,0,0,1,12,22Z"/><circle class="cls-1" cx="8" cy="12" r="1"/><circle class="cls-1" cx="16" cy="12" r="1"/><circle class="cls-1" cx="12" cy="8" r="1"/><circle class="cls-1" cx="12" cy="16" r="1"/><circle class="cls-1" cx="12" cy="12" r="1"/></svg>
                <p>{{ t("menu.temp") }}</p>    
            </div>
        </router-link>
        <router-link to="/pansizes">
            <div class="menu-item" :class="{ selected : currentRoute == 'Pan Sizes' }">
                <svg data-name="016_FOOD" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M15,22H4.8a2,2,0,0,1-2-1.85L2,9.76A3,3,0,0,1,3.5,6.93a1,1,0,0,1,1,1.73,1,1,0,0,0-.5.95L4.8,20H15a1,1,0,0,1,2,.15A2,2,0,0,1,15,22Z"/><path class="cls-1" d="M19.2,18H9.05a2,2,0,0,1-2-1.85L6.26,5.76a1.69,1.69,0,0,1,0-.23A3,3,0,0,1,8.62,2.59a26.19,26.19,0,0,1,11,0A3,3,0,0,1,22,5.53a1.93,1.93,0,0,1,0,.24l-.11,1.5a1,1,0,0,1-1.08.92,1,1,0,0,1-.92-1.07L20,5.61a1,1,0,0,0-.79-1.06A23.89,23.89,0,0,0,9,4.55a1,1,0,0,0-.79,1L9.05,16H19.2l.37-4.9a1,1,0,1,1,2,.16l-.38,4.89A2,2,0,0,1,19.2,18Z"/></svg>
                <p>{{ t("menu.pan") }}</p>    
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {

        const {t} = useI18n({})

        const currentRoute = computed(() => {
        return useRoute().name
        })

        return { 
            t,
            currentRoute
        }
  }
});
</script>

<style scoped>

.menu {
    background-color: var(--background);
    position: fixed;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    color: var(--grey);
    padding: 1rem;
    box-sizing: border-box;
    align-content: center;
    justify-items: center;
    border-radius: 2rem 2rem 0 0;
}

.menu-item {
    font-size: 80%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
}

.menu-item svg {
    fill: var(--grey);
    height: 1.5rem;
    width: auto;
    margin-bottom: 0.5rem;
}

.menu a, .menu-item p {
    color: var(--grey);
    text-decoration: none;
}

.selected, .selected a, .selected p {
    color: var(--main-accent);
}

.selected svg {
    fill: var(--main-accent);
}

@media (min-width: 74rem) {
  .menu {
    grid-area: menu;
    position: relative !important;
    grid-template-rows: repeat(3, 1fr);
    height: 60%;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }

}

</style>
