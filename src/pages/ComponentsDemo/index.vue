<template>
  <div>
    <Input />
    <List
      :list="list"
      @emit-del="del"
      ref="refList"
    />
  </div>
</template>

<script>
import Input from "./Input"
import List from "./List"
export default {
  components: { Input, List },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "2333"
        },
        {
          id: 2,
          title: "ttt"
        }
      ]
    }
  },

  methods: {
    del(item) {
      console.log(item.id)
    },
    parentTest(){
      console.log("parent-test")
    }
  },

  mounted(){
    this.$refs.refList.childrenTest()
  }
}
</script>
