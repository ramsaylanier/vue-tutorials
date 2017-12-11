<template>
  <div>
    <svg :class="$style.svg" id="svg" ref="svg">
    </svg>
  </div>
</template>


<script>

import {select} from 'd3'
import {scaleLinear} from 'd3-scale'
import {rgb} from 'd3-color'
import {axisBottom, axisLeft} from 'd3-axis'
import {map} from 'lodash'

const HISTOGRAM_HEIGHT = 100
const FPS = 25

let xAxis = null
let yAxis = null

export default {
  name: 'chart',
  props: ['frame', 'color'],
  data () {
    return {
      xAxis: null,
      yAxis: null
    }
  },
  mounted: function () {
    this.setupChart()
    this.getCurrentTime()
  },
  watch: {
    frame () {
      this.updateChart()
    }
  },
  methods: {
    getCurrentTime: function () {
      const vid = document.getElementById('video')
      this.currentTime = vid.currentTime
      const dX = xAxis(this.currentTime * FPS)
      select('.needle-line')
        .attr('d', () => {
          return `M${dX},${HISTOGRAM_HEIGHT} ${dX}, 0`
        })
      requestAnimationFrame(this.getCurrentTime)
    },
    updateChart: function () {
      let frame = this.frame
      let color = this.color
      const svg = select('#svg')

      map(color, (c, k) => {
        svg
          .append('circle')
          .attr('r', 1)
          .attr('cx', xAxis(frame))
          .attr('cy', yAxis(c))
          .attr('fill', () => {
            const n = rgb()
            n[k] = c
            return n
          })
      })

      svg
        .append('rect')
        .attr('x', xAxis(frame))
        .attr('y', yAxis(310))
        .attr('width', 3)
        .attr('height', 20)
        .attr('fill', rgb(color.r, color.g, color.b))
    },
    setupChart: function () {
      const videoNode = document.getElementById('video')
      const svgNode = document.getElementById('svg')
      svgNode.setAttribute('width', videoNode.offsetWidth)
      svgNode.setAttribute('height', HISTOGRAM_HEIGHT)

      const xDomain = [0, videoNode.duration * FPS]
      const yDomain = [0, 256]

      const svg = select('#svg')
      const width = svg.attr('width')
      const height = svg.attr('height')
      const g = svg.append('g')
      xAxis = scaleLinear().range([0, width])
      yAxis = scaleLinear().range([height, 0])

      xAxis.domain(xDomain)
      yAxis.domain(yDomain)

      g.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', `translate(0, ${height})`)
        .call(axisBottom(xAxis))

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(axisLeft(yAxis))

      g.append('path')
        .attr('class', 'needle-line')
        .style('stroke', 'black')
        .style('stroke-width', '3px')
        .style('opacity', '1')
    }
  }
}
</script>

<style module>
  .svg{
    width: 100%;
    overflow: visible;
  }
</style>
