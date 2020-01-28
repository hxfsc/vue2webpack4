import VueRouter from "vue-router";

import routes from "./routes";

const getChildren = routers => {
	return routers.reduce((prev, next) => {
		return prev.concat(next.children ? getChildren(next.children) : next);
	}, []);
};

const r = getChildren(routes);

export { r };

export default () => {
	return new VueRouter({
		mode: "history",
		routes: routes,
		scrollBehavior(to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	});
};
