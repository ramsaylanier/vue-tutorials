<template>
  <div>
    <router-link :to="{path: '/'}">Back</router-link>
    <ul :class="$style.list">
    <li :class="$style.item" v-for="thumbnail in thumbnails" :key="thumbnail.key">
      <img :src="`${thumbnailBucketURL}/${thumbnail.Key}`"/>
    </li>
  </ul>
  </div>
</template>

<script>
import {getThumbnails} from '@/aws.js'
import {aws} from 'config'

export default {
  name: 'upload',
  data () {
    return {
      thumbnails: [],
      thumbnailBucketURL: `https://s3.amazonaws.com/${aws.thumbnailBucket}`
    }
  },
  mounted () {
    // get the key from the router param and remove the file extension
    const key = this.$route.params.key.replace(/.[^.]+$/, '')

    return getThumbnails(key).then(r => {
      this.thumbnails = r
    })
  }
}
</script>

<style module>
  .list{
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .item{

  }
</style>