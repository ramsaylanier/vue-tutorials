<template>
  <div :class="$style.container">
    <form @submit.prevent="handleSubmit">

      <div :class="$style.input">
        <input @change="handleFileChange" :class="$style.file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
        <label for="file">Choose files</label>
      </div>

      <h3>Files To Upload</h3>
      <ul :class="$style.list">
        <li :class="$style.listItem" v-for="file in files" :key="file.name">
          {{file.name}}
        </li>  
      </ul>

      <input v-if="files.length > 0" type="submit" value="Upload" :class="$style.submit"/>

      {{message}}
    </form>

  </div>
</template>

<script>
import {uploadFiles} from '@/aws.js'
export default {
  name: 'upload-form',
  props: ['setUploadStatus'],
  data () {
    return {
      files: [],
      message: null
    }
  },
  methods: {
    handleFileChange (e) {
      this.files = [...e.target.files]
      this.message = null
    },
    handleSubmit (e) {
      this.setUploadStatus(true)
      uploadFiles(this.files).then(r => {
        this.files = []
        this.message = 'Uploaded!'
        this.setUploadStatus(false)
      })
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
    margin: 1rem 0;
    padding: 0;
  }

  .listItem{
    color: black;
    display: block;
    padding: .5rem;
    border-bottom: 1px solid black;
  }
  
  .input{
    margin: 1rem 0;
  }

  .input label{
    display: inline-block;
    background-color: black;
    border: 1px solid black;
    color: white;
    padding: 1rem;
    cursor: pointer;
    border-radius: 3px;
  }

  .input label:hover{
    background-color: white;
    color: black;
    cursor: pointer;
  }

  .file{
    display: none;
  }

  .submit{
    font-size: 1rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border: 1px solid black;
    background-color: white;
    padding: 1rem 2rem;
    border-radius: 3px;
    transition: background 150ms ease-out;
  }

  .submit:hover{
    background-color: black;
    color: white;
    cursor: pointer;
  }
</style>