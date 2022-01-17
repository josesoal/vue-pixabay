import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import Pixabay from "./components/pixabay/Pixabay"

Vue.use(VueRouter)

const routes = [
  { path: "/home", component: Home},
  { path: "/", component: Pixabay}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router