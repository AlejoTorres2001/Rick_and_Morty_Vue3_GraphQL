import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/episodios/:page?", //parametro pagina '?' puede o no existir
    name: "Episodios",
    alias: "/", // lets you have access to that route in the 'alias' route
    component: () =>
      import(/* webpackChunkName: "episodios" */ "../views/Episodios.vue"),
  },
  {
    path: "/ubicaciones/:page?",
    name: "Ubicaciones",
    component: () =>
      import(/* webpackChunkName: "ubicaciones" */ "../views/Ubicaciones.vue"),
  },
  {
    path: "/personajes/:page?",
    name: "Personajes",
    component: () =>
      import(/* webpackChunkName: "personajes" */ "../views/Personajes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
