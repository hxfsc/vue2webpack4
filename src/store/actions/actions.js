import inputActions from "./inputActions";
export default {
	updateCountSync(store, { num, time }) {
		setInterval(() => {
			store.commit("updateCount", num++);
		}, time);
	},
	...inputActions
};
