<template>
  <Header></Header>
  <main>
    <Input :labelText="'Hi!'" :inputType="'number'"></Input>
    <Select :selectName="'example'" :selectOptions="['One', 'Two']"></Select>
    <Button :buttonText="'I\'m a button'"></Button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Button,
    Input,
    Select
}
});
</script>

<style>

#app {
  width: 80%;
  padding: 3rem 10%;
}

</style>
