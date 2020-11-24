<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        @click="$emit('emit-del', item)"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import event from './event'
export default {
  props: {
    list: {
      default() {
        return []
      }
    }
  },

  mounted(){
    this.$parent.parentTest()
    event.$on("eventEmitInputChange", ($event)=>{
      console.log($event)
    })
  },

  methods:{
    eventEmitInputChange($event){
      console.log($event)
    },
    childrenTest(){
      console.log("childen-test")
    }
  }
}
</script>
