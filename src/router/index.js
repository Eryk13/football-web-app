import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import AddClubView from "../views/AddClubView.vue";
import EditClubView from "../views/EditClubView.vue";
import AddNationalityView from "../views/AddNationalityView.vue";
import EditNationalityView from "../views/EditNationalityView.vue";
import EditPlayerView from "../views/EditPlayerView.vue";
import AddPlayerView from "../views/AddPlayerView.vue";
import AddFixtureView from "../views/AddFixtureView.vue";
import EditFixtureView from "../views/EditFixtureView.vue";
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
    },
    {
      path: "/admin/nationality/edit/:id",
      name: "AdminNationalityEdit",
      component: EditNationalityView
    },
    {
      path: "/admin/nationality/add",
      name: "AdminNationalityAdd",
      component: AddNationalityView
    },
    {
      path: "/admin/player/edit/:id",
      name: "AdminPlayerEdit",
      component: EditPlayerView
    },
    {
      path: "/admin/player/add",
      name: "AdminPlayerAdd",
      component: AddPlayerView
    },
    {
      path: "/admin/fixture/edit/:id",
      name: "AdminFixtureEdit",
      component: EditFixtureView
    },
    {
      path: "/admin/fixture/add",
      name: "AdminFixtureAdd",
      component: AddFixtureView
    }
  ],
});

export default router;
