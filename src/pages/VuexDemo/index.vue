<template>
  <div>
    <p>{{num}}</p>

    <button class="btn btn-primary" @click="add(3)">add</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('moudleVuex')
export default {

  computed:{
    ...mapState({
      num: ({num})=>num
    })
  },

  methods:{
    ...mapActions([
      "add"
    ])
  }
}
</script>
