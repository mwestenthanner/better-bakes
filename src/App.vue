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

@media (min-width: 74rem) {

  header {
    padding-left: 30%;
  }

  main {
    padding: unset;
    padding-top: 7rem;
    width: 80%;
    margin-left: 10%;
  }

  #app {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 4fr;
    grid-template-areas: 
      "header main"
      "menu main"
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

}

@media (min-width: 125rem) {
  #app {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 4fr;
  }

  main {
    width: 60%;
    margin-left: 20%;
  }
}

</style>
