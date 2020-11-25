const Products = () => import(/*webpackChunkName: 'Products' */"@pages/Products")
const Statistics = () => import("@pages/Statistics")
const Dashboard = () => import("@pages/Dashboard")
const Order = () => import("@pages/Order")
const Login = () => import("@pages/Login")
const BaseTpl = () => import("@pages/BaseDemo/TplDemo")
const WatchDemo = () => import(/*webpackChunkName: 'WatchDemo' */"@pages/BaseDemo/WatchDemo")
const NextTickDemo = () => import(/*webpackChunkName: 'NextTickDemo' */"@pages/BaseDemo/NextTickDemo")
const ComponentsDemo = () => import("@pages/ComponentsDemo")
const VuexDemo = () => import("@pages/VuexDemo")

const routers = [
  {
    path: "/",
    title: "dashboard",
    component: Dashboard,
    children: [
      { path: "", component: Statistics },
      { path: "basedemo", component: BaseTpl },
      { path: "watchdemo", component: WatchDemo },
      { path: "nexttickdemo", component: NextTickDemo },
      { path: "componentsdemo", component: ComponentsDemo },
      { path: "vuexdemo", component: VuexDemo },
      { path: "order", component: Order },
      { path: "statistics", component: Statistics },
      { path: "products", component: Products },
      { path: "customer", component: Products },
      { path: "derive", component: Products },
      { path: "institution", component: Products }
    ]
  },
  {
    path: "/login",
    title: "login",
    component: Login
  }
]

export default routers
