import Vue from 'vue';
import Vuex from "vuex";
import VueRouter from "vue-router";


import App from './App.vue';

import Parent from "./components/ParentChild/Parent.vue";
import ComTransition from "./components/ComTransition/ComTransition.vue";
import Form from "./components/Form/Form.vue";
import ComBase from "./components/ComBase/ComBase.vue";
import ComError from "./components/ComError/ComError.vue";
import ComDefined from "./components/ComDefined/ComDefined.vue";
import ComExtend from "./components/ComExtend/ComExtend.vue"
import VModel from "./components/ComVModel/VModel.vue";




import createRouter from "./router/router";
import createStore from "./store/store";

Vue.use(Vuex);
Vue.use(VueRouter);

const store = createStore();
const router = createRouter();

new Vue({
	router,
	store,
	render: app => app(App)
}).$mount("#root");

