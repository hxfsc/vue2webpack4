import Vue from 'vue';
//import App from './App.vue';

import Parent from "./components/ParentChild/Parent.vue";
import ComTransition from "./components/ComTransition/ComTransition.vue";
import Form from "./components/Form/Form.vue";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render: app => app(Form)
}).$mount(root);
