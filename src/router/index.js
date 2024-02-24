import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import AddClubView from "../views/AddClubView.vue";
import EditClubView from "../views/EditClubView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
    {
      path: "/admin/club/add",
      name: "AdminClubAdd",
      component: AddClubView
    },
    {
      path: "/admin/club/edit/:id",
      name: "AdminClubEdit",
      component: EditClubView
    }
  ],
});

export default router;
