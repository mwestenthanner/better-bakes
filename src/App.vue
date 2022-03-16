<template>
  <Header></Header>
  <main>
    <Input :labelText="'An input'" :inputType="'number'"></Input>
    <Select :labelText="'A select'" :selectName="'example'" :selectOptions="['One', 'Two']"></Select>
    <Button :buttonText="'I\'m a button'"></Button>
  </main>
  <Menu></Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Button,
    Input,
    Select,
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

label {
  display: block;
  margin-bottom: 0.75rem;
}

Input, Select {
  margin-bottom: 1.5rem;
}

</style>
