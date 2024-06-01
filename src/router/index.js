import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Mission from "../views/Mission.vue";
import Langues from "../views/Langues.vue";
import Formations from "../views/Formations.vue";
import Informatique from "../views/formations/Informatique.vue"

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
      {
        path: "/langues",
        name: "langues",
        component: Langues,
      },
      {
        path: "/formations",
        name: "formations",
        component: Formations,
      },
      {
        path: "/formation",
        children: [
          {
            path: "/informatique",
            name: "informatique",
            component: Informatique,
          },
        ]
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
