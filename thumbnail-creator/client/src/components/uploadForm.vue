<template>
  <div :class="$style.container">
    <form @submit.prevent="handleSubmit">
      <input type="file" @change="handleFileChange" multiple/>
      <h3>Files To Upload</h3>
      <ul :class="$style.list">
        <li :class="$style.listItem" v-for="file in files" :key="file.name">
          {{file.name}}
        </li>  
      </ul>
      <input type="submit" value="Upload"/>
    </form>

  </div>
</template>

<script>
import {uploadFiles} from '@/aws.js'
export default {
  name: 'upload-form',
  data () {
    return {
      files: []
    }
  },
  methods: {
    handleFileChange (e) {
      this.files = [...e.target.files]
    },
    handleSubmit (e) {
      uploadFiles(this.files)
    }
  }
}
</script>

<style module>

  .container{
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }

  .list{
    list-style: none;
  }

  .listItem{
    background-color: black;
    color: white;
    display: block;
  }
</style>