import ComBase from "../components/ComBase/ComBase.vue";
import ComDefined from "../components/ComDefined/ComDefined.vue";

import ComError from "../components/ComError/ComError.vue";
import ComExtend from "../components/ComExtend/ComExtend.vue";
import ComTransition from "../components/ComTransition/ComTransition.vue";
import ComVModel from "../components/ComVModel/VModel.vue";
import Form from "../components/Form/Form.vue";
import ParentChild from "../components/ParentChild/Parent.vue";


export default [
	{
		path: "/",
		redirect: "/com-base"
	},{
		path: "/com-base",
		component: ComBase
	},{
		path: "/com-defined",
		component: ComDefined
	},{
		path: "/com-error",
		component: ComError
	},{
		path: "/com-extend",
		component: ComExtend
	},{
		path: "/com-transition",
		component: ComTransition
	},{
		path: "/com-vmodel",
		component: ComVModel
	},{
		path: "/form",
		component: Form
	},{
		path: "/parent-child",
		component: ParentChild
	}


]
