import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";

import createRouter from "./router/router";
import createStore from "./store/store";

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = createStore();
const router = createRouter();

new Vue({
	router,
	store,
	render: app => app(App)
}).$mount("#root");
