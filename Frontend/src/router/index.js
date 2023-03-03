import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"
const routes = [
  {
    path: "/",
    name: "quizes",
    component: QuizesView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router