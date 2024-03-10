import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/admin/AdminView.vue";
import AddClubView from "../views/admin/AddClubView.vue";
import EditClubView from "../views/admin/EditClubView.vue";
import AddNationalityView from "../views/admin/AddNationalityView.vue";
import EditNationalityView from "../views/admin/EditNationalityView.vue";
import EditPlayerView from "../views/admin/EditPlayerView.vue";
import AddPlayerView from "../views/admin/AddPlayerView.vue";
import AddFixtureView from "../views/admin/AddFixtureView.vue";
import EditFixtureView from "../views/admin/EditFixtureView.vue";
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
