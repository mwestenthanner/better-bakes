import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IngredientConverter from '../views/IngredientConverter.vue'
import TemperatureConverter from '../views/TemperatureConverter.vue'
import PanSizeConverter from '../views/PanSizeConverter.vue'

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
history: createWebHistory(),
routes
})

export default router