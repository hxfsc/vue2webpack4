const ComBase = () => import("@components/Base");
const ComDefined = () => import("@components/Defined");
const ComError = () => import("@components/Error");
const ComExtend = () => import("@components/Extend");
const ComTransition = () => import("@components/Transition");
const ComVModel = () => import("@components/VModel");
const Form = () => import("@components/Form");
const ParentChild = () => import("@components/ParentChild");
const ComVuexBase = () => import("@components/Vuex/Base");
const Signal = () => import("@components/Signal");
const Sync = () => import("@components/Sync");
const ClassStyle = () => import("@components/ClassStyle");
const ElementPage = () => import("@components/Element/ElementPage.vue");
const ElementLayout = () => import("@components/Element/ElementLayout.vue");
const ComRouterProps = () => import("@components/Router/ComRouterProps");

const routers = [
	{
		title: "基本",
		name: "com-base",
		path: "/",
		redirect: "/com-base",
		children: [
			{
				title: "基本",
				name: "com-base",
				path: "/com-base",
				component: ComBase
			},
			{
				title: "双向绑定",
				name: "com-defined",
				path: "/com-defined",
				component: ComDefined
			},
			{
				title: "错误",
				name: "ComError",
				path: "/com-error",
				component: ComError
			},
			{
				title: "extend",
				name: "ComExtend",
				path: "/com-extend",
				component: ComExtend
			},
			{
				title: "Transition",
				name: "ComTransition",
				path: "/com-transition",
				component: ComTransition
			},
			{
				title: "VModel",
				name: "ComVModel",
				path: "/com-vmodel",
				component: ComVModel
			},
			{
				title: "Form",
				name: "Form",
				path: "/form",
				component: Form
			},
			{
				title: "父子传递",
				name: "ParentChild",
				path: "/parent-child",
				component: ParentChild
			},
			{
				title: "Signal",
				name: "Signal",
				path: "/signal",
				component: Signal
			},
			{
				title: "Sync",
				name: "Sync",
				path: "/sync",
				component: Sync
			},
			{
				title: "ClassStyle",
				name: "ClassStyle",
				path: "/class-style",
				component: ClassStyle
			}
		]
	},

	{
		title: "Router",
		children: [
			{
				title: "RouterProps",
				name: "RouterProps",
				path: "/router-props/:id",
				props: true,
				component: ComRouterProps
			}
		]
	},

	{
		title: "Vuex",
		name: "ComVuexBase",
		path: "/vuex-base",
		redirect: "/vuex-base",
		children: [
			{
				title: "ComVuexBase",
				name: "ComVuexBase",
				path: "/vuex-base",
				component: ComVuexBase
			}
		]
	},

	{
		title: "Element",
		name: "Element",
		path: "/element-page",
		redirect: "/element-page",
		children: [
			{
				title: "ElementPage",
				name: "ElementPage",
				path: "/element-page",
				component: ElementPage
			},
			{
				title: "ElementLayout",
				name: "ElementLayout",
				path: "/element-layout",
				component: ElementLayout
			}
		]
	}
];

export default routers;
