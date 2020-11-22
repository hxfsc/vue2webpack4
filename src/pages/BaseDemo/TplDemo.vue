<template>
  <div>
    <p>文本插值 {{ message }}</p>
    <hr />
    <p>JS表达式{{ flag ? "yes" : "no" }}</p>
    <hr />
    <p :id="dynamicId">动态属性 id</p>
    <hr />
    <p v-html="rawHtml"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue",
      flag: true,
      rawHtml: "指令-原始html <b>加粗</b> <i>斜体</i></i>",
      dynamicId: `id-${Date.now()}`
    }
  }
}
</script>
