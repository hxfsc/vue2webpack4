const ComBase = () => import("@components/Base");
const ComDefined = () => import("@components/Defined");
const ComError = () => import("@components/Error");
const ComExtend = () => import("@components/Extend");
const ComTransition = () => import("@components/Transition");
const ComVModel = () => import("@components/VModel");
const Form = () => import("@components/Form");
const ParentChild = () => import("@components/ParentChild");
const Signal = () => import("@components/Signal");
const Sync = () => import("@components/Sync");
const ClassStyle = () => import("@components/ClassStyle");
const ElementPage = () => import("@components/Element/ElementPage.vue");
const ElementLayout = () => import("@components/Element/ElementLayout.vue");
const ComRouterProps = () => import("@components/Router/ComRouterProps");
const ComVuexBase = () => import("@components/Vuex/Base");
const VuexInput = () => import("@components/Vuex/Input");
const ElementDialig = () => import("@components/Element/Dialog");

const Statistics = ()=>import("@components/Statistics");
const Dashboard = () => import("@components/Dashboard");
const Order = ()=>import("@components/Order");
const Login = () => import("@components/Login");

const routers = [

	{
    path: "/",
    title: "dashboard",
    component: Dashboard,
		children: [
      { path: '', component: Statistics},
      { path: 'order', component: Order },
      { path: 'statistics', component: Statistics },
			// {
			// 	title: "基本",
			// 	name: "com-base",
			// 	path: "/com-base",
			// 	component: ComBase
			// },
			// {
			// 	title: "双向绑定",
			// 	name: "com-defined",
			// 	path: "/com-defined",
			// 	component: ComDefined
			// },
			// {
			// 	title: "错误",
			// 	name: "ComError",
			// 	path: "/com-error",
			// 	component: ComError
			// },
			// {
			// 	title: "extend",
			// 	name: "ComExtend",
			// 	path: "/com-extend",
			// 	component: ComExtend
			// },
			// {
			// 	title: "Transition",
			// 	name: "ComTransition",
			// 	path: "/com-transition",
			// 	component: ComTransition
			// },
			// {
			// 	title: "VModel",
			// 	name: "ComVModel",
			// 	path: "/com-vmodel",
			// 	component: ComVModel
			// },
			// {
			// 	title: "Form",
			// 	name: "Form",
			// 	path: "/form",
			// 	component: Form
			// },
			// {
			// 	title: "父子传递",
			// 	name: "ParentChild",
			// 	path: "/parent-child",
			// 	component: ParentChild
			// },
			// {
			// 	title: "Signal",
			// 	name: "Signal",
			// 	path: "/signal",
			// 	component: Signal
			// },
			// {
			// 	title: "Sync",
			// 	name: "Sync",
			// 	path: "/sync",
			// 	component: Sync
			// },
			// {
			// 	title: "ClassStyle",
			// 	name: "ClassStyle",
			// 	path: "/class-style",
			// 	component: ClassStyle
			// }
		]
	},
  {
    path: "/login",
    title: "login",
		component: Login
	},
	// {
	// 	title: "Router",
	// 	children: [
	// 		{
	// 			title: "RouterProps",
	// 			name: "RouterProps",
	// 			path: "/router-props/:id",
	// 			props: true,
	// 			component: ComRouterProps
	// 		}
	// 	]
	// },

	// {
	// 	title: "Vuex",
	// 	name: "VuexBase",
	// 	path: "/vuex-base",
	// 	children: [
	// 		{
	// 			title: "VuexBase",
	// 			name: "VuexBase",
	// 			path: "/vuex-base",
	// 			component: ComVuexBase
	// 		},
	// 		{
	// 			title: "VuexInput",
	// 			name: "VuexInput",
	// 			path: "/vuex-input",
	// 			component: VuexInput
	// 		}
	// 	]
	// },

	// {
	// 	title: "Element",
	// 	name: "Element",
	// 	path: "/element-page",
	// 	redirect: "/element-page",
	// 	children: [
	// 		{
	// 			title: "ElementPage",
	// 			name: "ElementPage",
	// 			path: "/element-page",
	// 			component: ElementPage
	// 		},
	// 		{
	// 			title: "ElementLayout",
	// 			name: "ElementLayout",
	// 			path: "/element-layout",
	// 			component: ElementLayout
	// 		},
	// 		{
	// 			title: "Dialog",
	// 			name: "Dialog",
	// 			path: "/element-dialog",
	// 			component: ElementDialig
	// 		}
	// 	]
	// }
];

export default routers;
