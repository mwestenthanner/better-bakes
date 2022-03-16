<template>
  <Header></Header>
  <router-view />
  <Menu></Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Menu
  }
});
</script>

<style>

header {
  width: 80%;
  padding: 3rem 10% 0 10%;
}

main {
  width: 80%;
  padding: 0 10% 0 10%;
}

main h2 {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.75rem;
}

Input, Select {
  margin-bottom: 1.5rem;
}

</style>
