import { createRouter, createWebHashHistory } from "vue-router";
import {
  isAuthenticatedAdminGuard,
  isAuthenticatedClientGuard,
} from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/modules/shared/pages/Login"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "@/modules/shared/pages/SignUp"),
  },
  {
    path: "/admin",
    name: "admin",
    beforeEnter: [isAuthenticatedAdminGuard],
    component: () =>
      import(/* webpackChunkName: "Admin" */ "@/modules/admin/layouts/Admin"),
    children: [
      {
        path: "dashboard",
        name: "admin-dashboard",
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ "@/modules/admin/pages/Dashboard"
          ),
      },
      {
        path: "clientes",
        name: "admin-clientes",
        component: () =>
          import(
            /* webpackChunkName: "Clientes" */ "@/modules/admin/pages/Clientes"
          ),
      },
      {
        path: "proveedores",
        name: "admin-proveedores",
        component: () =>
          import(
            /* webpackChunkName: "Proveedores" */ "@/modules/admin/pages/Proveedores"
          ),
      },
      {
        path: "",
        name: "redirect-admin",
        redirect: { name: "admin-dashboard" },
      },
    ],
  },
  {
    path: "/client",
    name: "client",
    beforeEnter: [isAuthenticatedClientGuard],
    component: () =>
      import(
        /* webpackChunkName: "Client" */ "@/modules/clients/layouts/Client"
      ),
    children: [
      {
        path: "registro",
        name: "client-registro",
        component: () =>
          import(
            /* webpackChunkName: "Registro" */ "@/modules/clients/pages/Registro"
          ),
      },
      {
        path: "",
        name: "redirect-client",
        redirect: { name: "client-registro" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/modules/shared/pages/NotFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
