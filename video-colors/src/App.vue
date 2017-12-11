<template>
  <div :class="$style.container">
    <video :class="$style.video" src="./assets/test.mp4" autoplay loop controls ref="video" id="video"/>
    <canvas :class="$style.canvas" ref="canvas" hidden></canvas>

    <histogram v-if="videoLoaded" :frame="frame" :color="averageColor"/>
  </div>
</template>

<script>
import Histogram from './histogram.vue'
import MyWorker from './worker.js'
const FPS = 25
const INTERVAL = 1000 / (FPS / 3)
let then = new Date().getTime()

export default {
  name: 'app',
  data () {
    return {
      videoLoaded: false,
      isPlaying: false,
      ctx: null,
      averageColor: {r: 0, g: 0, b: 0},
      frame: 0
    }
  },
  mounted () {
    const canvasNode = this.$refs.canvas
    const videoNode = this.$refs.video
    this.ctx = canvasNode.getContext('2d')
    this.worker = new MyWorker()

    this.worker.onmessage = e => {
      this.averageColor = e.data
      this.frame = Math.floor(videoNode.currentTime * FPS)
    }

    // set canvas to be same height as video
    videoNode.addEventListener('canplay', e => {
      canvasNode.height = videoNode.offsetHeight
      canvasNode.width = videoNode.offsetWidth
      this.videoLoaded = true
    })

    videoNode.addEventListener('play', e => {
      this.isPlaying = true
    })

    videoNode.addEventListener('pause', e => {
      this.isPlaying = false
    })
  },
  methods: {

    drawCanvas (time) {
      requestAnimationFrame(this.drawCanvas)

      const now = new Date().getTime()
      let delta = now - then

      if (delta > INTERVAL) {
        then = now - (delta % INTERVAL)

        const vid = this.$refs.video
        let x1 = 0
        let y1 = 0
        x1 = vid.offsetWidth
        y1 = vid.offsetHeight
        this.ctx.drawImage(vid, 0, 0, x1, y1)

        const data = this.ctx.getImageData(0, 0, x1, y1)
        this.worker.postMessage(data)
      }
    }
  },
  watch: {
    isPlaying (isPlaying) {
      requestAnimationFrame(this.drawCanvas)
    }
  },
  components: {
    Histogram
  }
}
</script>

<style module>

  *{
    box-sizing: border-box;
  }

  .container{
    padding: 0;
    margin: 0 auto;
    width: 95%;
    max-width: 1000px;
    position: relative;
  }

  .video{
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }

  .canvas{
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    display: none;
  }

  .color{
    height: 50px;
    width: 50px;
  }
</style>
