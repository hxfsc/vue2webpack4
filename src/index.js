import Vue from 'vue';
//import App from './App.vue';

import Parent from "./components/ParentChild/Parent.vue";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render: app => app(Parent)
}).$mount(root);
