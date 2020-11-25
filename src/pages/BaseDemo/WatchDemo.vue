<template>
  <div>
    <p>{{obj.a}}</p>
    <hr>
    <div>
      <button
        class="btn btn-success"
        @click="plus"
      >change</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      obj:{
        a: 1
      }
    }
  },

  mounted(){
    console.log(this.$route.params)
    console.log(this.$router)
  },

  methods:{
    plus(){
      this.obj.a =  this.obj.a+5
    }
  },
  watch:{
    // obj(newVal, oldVal){
    //   console.log(`oldVal:${oldVal}, newVal:${newVal}`)
    // }
    obj:{
      handler(newVal,oldVal){
        console.dir(`oldVal:${oldVal}, newVal:${newVal}`)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
