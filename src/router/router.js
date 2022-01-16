import { createWebHistory, createRouter } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Home from "../views/Home.vue";
import List from '../views/List.vue'
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Berhasil from '../views/Berhasil.vue'
import Dashboard from '../views/admin/Dashboard.vue'
// lazy-loaded
const Profile = () => import("../components/Profile.vue")
const BoardAdmin = () => import("../views/admin/BoardAdmin.vue")
const BoardModerator = () => import("../components/BoardModerator.vue")
const BoardUser = () => import("../components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: Landingpage,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detailproduk',
    name: 'DetailProduk',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailProduk.vue')
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/adddatamobil',
    name: 'AddDataMobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AddDataMobil.vue')
  },

  {
    path: '/editdatamobil/:id',
    name: 'EditDataMobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditDataMobil.vue')
  },

  {
    path: '/deletemobil/:id',
    name: 'deletemobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/DeleteMobil.vue')
  },

  {
    path: '/datamobil',
    name: 'Datamobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Datamobil.vue')
  },

  {
    path: '/datapelanggan',
    name: 'DataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/DataPelanggan.vue')
  },

  {
    path: '/adddatapelanggan',
    name: 'AddDataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AddDataPelanggan.vue')
  },

  {
    path: '/editdatapelanggan',
    name: 'EditDataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditDataPelanggan.vue')
  },

  {
    path: '/transaksi',
    name: 'Transaksi',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Transaksi.vue')
  },

  {
    path: '/berhasil',
    name: 'Berhasil',
    component: Berhasil
    // component: () => import(/* webpackChunkName: "about" */ '../views/Berhasil.vue')
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // component: () => import(/* webpackChunkName: "about" */ '../views/Berhasil.vue')
  },

  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/dashboard'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;