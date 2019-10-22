import VueRouter from "vue-router";

import routes from "./routes";

const getChilds = routers => {
	return routers.reduce((prev, next) => {
		return prev.concat(next.childs ? getChilds(next.childs) : next);
	}, []);
};

const r = getChilds(routes);

export { r };

export default () => {
	return new VueRouter({
		mode: "history",
		routes: r,
		scrollBehavior(to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	});
};
