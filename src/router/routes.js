import ComBase from "../components/ComBase/ComBase.vue";
import ComDefined from "../components/ComDefined/ComDefined.vue";
import ComError from "../components/ComError/ComError.vue";
import ComExtend from "../components/ComExtend/ComExtend.vue";
import ComTransition from "../components/ComTransition/ComTransition.vue";
import ComVModel from "../components/ComVModel/VModel.vue";
import Form from "../components/Form/Form.vue";
import ParentChild from "../components/ParentChild/Parent.vue";
import ComRouterProps from "../components/Router/ComRouterProps/ComRouterProps.vue";
import ComVuexBase from "../components/Vuex/Base/ComVuexBase.vue";
import Signal from "../components/Signal/SignalBase.vue";
import Sync from "../components/Sync/Sync.vue";
import ClassStyle from "../components/ClassStyle/ClassStyle.vue";
import ElementPage from "../components/Element/ElementPage.vue";
import ElementLayout from "../components/Element/ElementLayout.vue";

const routers = [
	{
		title: "基本",
		name: "com-base",
		path: "/",
		redirect: "/com-base",
		childs: [
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
		name: "RouterProps",
		path: "/router-props/123",
		redirect: "/router-props/123",
		childs: [
			{
				title: "RouterProps",
				name: "RouterProps",
				path: "/router-props/123",
				component: ComRouterProps
			}
		]
	},

	{
		title: "Vuex",
		name: "ComVuexBase",
		path: "/vuex-base",
		redirect: "/vuex-base",
		childs: [
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
		childs: [
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
