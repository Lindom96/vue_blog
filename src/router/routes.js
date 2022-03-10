import Admin from "@/views/Admin";
import homeRouter from "./home-router";
import Login from "@/views/Login/login";
import Home from "@/views/Home";
import HomeArticle from "@/views/Home/article";
import ErrorPage from "@/views/ErrorPage/404";

const routes = [
  {
    path: "",
    redirect: "/home", //重定向路径(设置默认路径)
  },
  {
    path: "/home",
    name: "home",
    hidden: true,
    meta: {
      title: "home",
    },
    component: Home,
    children: [
    ],
  },
  {
    path: "/404",
    component: ErrorPage,
    hidden: true,
  },
  {
    path: "/home/article",
    name: "HomeArticle",
    hidden: true,
    meta: {
      title: "viewArticle",
    },
    component: HomeArticle,
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    meta: {
      title: "login",
    },
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    redirect: "/admin/about",
    component: Admin,
    children: [...homeRouter],
  },
];

export default routes;
