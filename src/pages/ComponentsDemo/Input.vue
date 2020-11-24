<template>
  <div>
    <input
      type="text"
      @change="changeInput"
    >
  </div>
</template>

<script>
import event from './event'
export default {
  methods:{
    changeInput($event){
      console.log($event)
      event.$emit("eventEmitInputChange", $event)
    }
  }
}
</script>
