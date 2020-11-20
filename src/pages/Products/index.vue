<template>
  <div>
    <p-d-f-view :pdfUrl="pdfUrl" ref="pdfview"></p-d-f-view>

    <button @click="open">打开</button>
  </div>

</template>

<script>
import PDFView from '../../components/PDFView'
export default {
  components:{PDFView},
  data(){
    return {
      pdfUrl: ""
    }
  },

  mounted(){

  },

  methods:{
    open(){
      this.$refs.pdfview.renderPdf('111')
    }
  }
}
</script>

