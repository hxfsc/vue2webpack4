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

export default [
	{
		path: "/",
		redirect: "/com-base"
	},
	{
		path: "/com-base",
		component: ComBase
	},
	{
		path: "/com-defined",
		component: ComDefined
	},
	{
		path: "/com-error",
		component: ComError
	},
	{
		path: "/com-extend",
		component: ComExtend
	},
	{
		path: "/com-transition",
		component: ComTransition
	},
	{
		path: "/com-vmodel",
		component: ComVModel
	},
	{
		path: "/form",
		component: Form
	},
	{
		path: "/parent-child",
		component: ParentChild
	},
	{
		path: "/router-props/:params_id",
		component: ComRouterProps,
		props: true
	},
	{
		path: "/vuex-base",
		component: ComVuexBase
	},
	{
		path: "/signal-base",
		component: Signal
	},
	{
		path: "/sync-base",
		component: Sync
	},
	{
		path: "/class-style",
		component: ClassStyle
	},
	{
		path: "/element-page",
		component: ElementPage
	},
	{
		path: "/element-layout",
		component: ElementLayout
	}
];
