export default {
	onChangeAction(store, input) {
		setTimeout(() => {
			console.log(input);
			const {
				target: { value }
			} = input;
			store.commit("onIntervalChange", value);
		}, 2000);
	}
};
