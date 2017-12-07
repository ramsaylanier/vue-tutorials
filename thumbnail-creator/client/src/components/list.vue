<template>
  <ul :class="$style.list">
    <li :class="$style.item" v-for="upload in uploads">
      <router-link :to="`upload/${upload.Key}`">
      <div :class="$style.header" :style="{backgroundImage: `url(${uploadBucketUL}/${sanitizeKey(upload.Key)})`}">
      </div>
      <div :class="$style.body">
        <h3>{{upload.Key}}</h3>
      </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import {getUploads} from '@/aws.js'
import {aws} from 'config'

export default {
  name: 'list',
  props: ['isUploading'],
  data () {
    return {
      uploads: [],
      uploadBucketUL: `https://s3.amazonaws.com/${aws.uploadBucket}`
    }
  },
  mounted () {
    this.getItems()
  },
  watch: {
    isUploading (uploading) {
      if (!uploading) {
        this.getItems()
      }
    }
  },
  methods: {
    getItems: function () {
      return getUploads().then(r => {
        this.uploads = r
      })
    },
    sanitizeKey: function (key) {
      return key.replace(/ /g, '+')
    }
  }
}
</script>

<style module>

  .list{
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  .item{
    border: 1px solid black;
  }

  .item:hover a{
    color: blue;
  }

  .item a{
    text-decoration: none;
    color: black;
  }

  .item img{
    width: 100%;
    height: 100%;
  }

  .header{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    height: 200px;
  }

  .body{
    padding: 1rem;
    font-size: 1.3rem;
  }

  .body h3{
    margin: 0;
  }
</style>  