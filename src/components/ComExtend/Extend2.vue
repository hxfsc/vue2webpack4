<script>
import Base from "./Base.vue";
export default {
	extends: Base,
	data(){
		return{
			test: 19
		}
	},

	mounted(){
		setInterval(()=>{
			this.test++
		}, 1 * 1000)
	}
}
</script>
