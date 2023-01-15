import { createRouter, createWebHistory } from 'vue-router'
import IngredientConverter from '../views/IngredientConverter.vue'
import TemperatureConverter from '../views/TemperatureConverter.vue'
import PanSizeConverter from '../views/PanSizeConverter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Ingredients',
      component: IngredientConverter
    },
    {
      path: '/temperature',
      name: 'Temperature',
      component: TemperatureConverter
    },
    {
      path: '/pansizes',
      name: 'Pan Sizes',
      component: PanSizeConverter
    }
  ]
})

export default router
