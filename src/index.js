import Vue from 'vue';
//import App from './App.vue';

import Parent from "./components/ParentChild/Parent.vue";
import ComTransition from "./components/ComTransition/ComTransition.vue";
import Form from "./components/Form/Form.vue";
import ComBase from "./components/ComBase/ComBase.vue";
import ComError from "./components/ComError/ComError.vue";
import ComDefined from "./components/ComDefined/ComDefined.vue";

import ComExtend from "./components/ComExtend/ComExtend.vue"



const root = document.getElementById("root");
new Vue({
	render: app => app(ComExtend)
}).$mount(root);

