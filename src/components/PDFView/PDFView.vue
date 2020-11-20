<template>
  <div class="pdfview-box">
    <div v-for="item in pdfPages" :id="`page-${item}`" :key="item" class="pdf-item">
      <canvas :id="'canvas-pdf-' + item" class="canvas-pdf"></canvas>
    </div>
  </div>
</template>

<script>
import PDFJS from 'pdfjs-dist'
import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer'
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker.entry'
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker
import axios from 'axios'
import 'pdfjs-dist/web/pdf_viewer.css'

export default {
  props: {
    scale: {
      required: false,
      type: String,
      default: '1.8'
    },
    pdfUrl: {
      required: false,
      type: String,
      default: '1.8'
    }
  },

  data() {
    return {
      pdfPages: [],
      loadPDF: null
    }
  },

  watch: {
    pdfUrl: function(url) {
      this.renderPdf(url)
    }
  },

  methods: {
    renderPdf(pdfUrl) {
      const url = `http://127.0.0.1:3000/compressed.tracemonkey-pldi-09.pdf`
      if (url == null || url === '') {
        return
      }

      this.pdfPages = []
      this.loadPDF = null


      axios({ url, method: 'get', responseType: 'blob' })
        .then(res => {
          const blobUrl = window.URL.createObjectURL(new Blob([res.data]))
          this.drawPdf(blobUrl)
        })
        .catch(err => console.log(err))
    },

    drawPdf(url) {
      const { scale } = this
      // 当 PDF 地址为跨域时，pdf 应该以流的形式传输，否则会出现pdf损坏无法展示
      this.loadPDF = PDFJS.getDocument({ url })
      this.loadPDF.promise
        .then(pdf => {
          // 得到PDF的总的页数
          const totalPage = pdf.numPages
          const idName = 'canvas-pdf-'
          // 根据总的页数创建相同数量的canvas
          this.createCanvas(totalPage, idName)
          for (let i = 1; i <= totalPage; i++) {
            pdf.getPage(i).then(page => {
              var pageDiv = document.getElementById(`page-${i}`)
              const viewport = page.getViewport({ scale })
              const canvas = document.getElementById(idName + i)
              const context = canvas.getContext('2d')
              canvas.height = viewport.height
              canvas.width = viewport.width
              this.viewHeight = viewport.height
              const renderContext = {
                canvasContext: context,
                viewport
              }
              // 如果你只是展示pdf而不需要复制pdf内容功能，则可以这样写render
              // page.render(renderContext) 如果你需要复制则像下面那样写利用text-layer
              page
                .render(renderContext)
                .promise.then(() => {
                  return page.getTextContent()
                })
                .then(textContent => {
                  // 创建文本图层div
                  const textLayerDiv = document.createElement('div')
                  textLayerDiv.setAttribute('class', 'textLayer')
                  // 将文本图层div添加至每页pdf的div中
                  pageDiv.appendChild(textLayerDiv)
                  // 创建新的TextLayerBuilder实例
                  const textLayer = new TextLayerBuilder({
                    textLayerDiv: textLayerDiv,
                    pageIndex: page.pageIndex,
                    viewport: viewport
                  })
                  textLayer.setTextContent(textContent)
                  textLayer.render()
                })
            })
          }
        })
        .catch(err => console.log(err))

        console.log(this.loadPDF.promise)
    },

    createCanvas(totalPages) {
      for (let i = 1; i <= totalPages; i++) {
        this.pdfPages.push(i)
      }

      console.log(this.pdfPages)
    }
  }
}
</script>
// <style lang="less" scoped>
// .pdfview-box {
//   position: relative;
//   width: 100%;
//   min-height: 800px;
// }

// .pdf-item {
//   position: relative;
// }
// </style>
