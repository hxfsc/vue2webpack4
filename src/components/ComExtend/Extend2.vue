<script>
import Base from "./Base.vue";
export default {
	extends: Base,
	data() {
		return {
			test: 3
		};
	},

	mounted() {
		setInterval(() => {
			this.test++;
		}, 1 * 1000);
	}
};
</script>
