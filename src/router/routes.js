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

const bases = [
	{
		title: "基本",
		name: "com-base",
		path: "/",
		redirect: "/com-base"
	},
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
		title: "Router Props",
		name: "ComRouterProps",
		path: "/router-props/:params_id",
		component: ComRouterProps,
		props: true
	},
	{
		title: "Vuex Base",
		name: "ComVuexBase",
		path: "/vuex-base",
		component: ComVuexBase
	},
	{
		title: "Signal",
		name: "Signal",
		path: "/signal-base",
		component: Signal
	},
	{
		title: "Sync",
		name: "Sync",
		path: "/sync-base",
		component: Sync
	},
	{
		title: "ClassStyle",
		name: "ClassStyle",
		path: "/class-style",
		component: ClassStyle
	},
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
];

const vueRouters = [
	{
		title: "RouterProps",
		name: "RouterProps",
		path: "/router-props/123",
		component: "RouterProps"
	}
];

const vuexs = [
	{
		title: "ComVuexBase",
		name: "ComVuexBase",
		path: "/vuex-base",
		component: "ComVuexBase"
	}
];

const element = [
	{
		title: "ElementPage",
		name: "ElementPage",
		path: "/element-page",
		component: "ElementPage"
	},
	{
		title: "ElementLayout",
		name: "ElementLayout",
		path: "/element-layout",
		component: "ElementLayout"
	}
];

export { vueRouters, vuexs, element };

export default bases;
