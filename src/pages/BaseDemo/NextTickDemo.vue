<template>
  <div>
    <ul ref="box">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      this.list = [1, 2, 3, 4, 5, 6]
      this.$nextTick(() => {
        this.$refs.box.getElementsByTagName("li")[0].innerHTML = "hello word1"
      })
    }
  }
}
</script>
