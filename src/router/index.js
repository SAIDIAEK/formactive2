import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Mission from "../views/Mission.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      },
      {
        path: "/mission",
        name: "mission",
        component: Mission,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
