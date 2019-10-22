import inputMutations from "./input";
export default {
	updateCount(state, num) {
		state.count = num;
	},
	...inputMutations
};
