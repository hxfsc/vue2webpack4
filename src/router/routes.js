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
		name: "com-base",
		path: "/",
		redirect: "/com-base"
	},
	{
		name: "com-base",
		path: "/com-base",
		component: ComBase
	},
	{
		name: "com-defined",
		path: "/com-defined",
		component: ComDefined
	},
	{
		name: "ComError",
		path: "/com-error",
		component: ComError
	},
	{
		name: "ComExtend",
		path: "/com-extend",
		component: ComExtend
	},
	{
		name: "ComTransition",
		path: "/com-transition",
		component: ComTransition
	},
	{
		name: "ComVModel",
		path: "/com-vmodel",
		component: ComVModel
	},
	{
		name: "Form",
		path: "/form",
		component: Form
	},
	{
		name: "ParentChild",
		path: "/parent-child",
		component: ParentChild
	},
	{
		name: "ComRouterProps",
		path: "/router-props/:params_id",
		component: ComRouterProps,
		props: true
	},
	{
		name: "ComVuexBase",
		path: "/vuex-base",
		component: ComVuexBase
	},
	{
		name: "Signal",
		path: "/signal-base",
		component: Signal
	},
	{
		name: "Sync",
		path: "/sync-base",
		component: Sync
	},
	{
		name: "ClassStyle",
		path: "/class-style",
		component: ClassStyle
	},
	{
		name: "ElementPage",
		path: "/element-page",
		component: ElementPage
	},
	{
		name: "ElementLayout",
		path: "/element-layout",
		component: ElementLayout
	}
];

const vueRouters = [
	{
		name: "RouterProps",
		path: "/router-props/123",
		component: "RouterProps"
	}
];

const vuexs = [
	{
		name: "ComVuexBase",
		path: "/vuex-base",
		component: "ComVuexBase"
	}
];

const element = [
	{
		name: "ElementPage",
		path: "/element-page",
		component: "ElementPage"
	},
	{
		name: "ElementLayout",
		path: "/element-layout",
		component: "ElementLayout"
	}
];

export { vueRouters, vuexs, element };

export default bases;
