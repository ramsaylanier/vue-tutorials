<template>
  <div :class="$style.container">
    <upload-form :setUploadStatus="setUploadStatus"/>
    <list :isUploading="isUploading"/>
  </div>
</template>

<script>
import UploadForm from '@/components/uploadForm.vue'
import List from '@/components/list.vue'

export default {
  name: 'Home',
  data () {
    return {
      isUploading: false
    }
  },
  methods: {
    setUploadStatus (isUploading) {
      this.isUploading = isUploading
    }
  },
  components: {
    UploadForm, List
  }
}
</script>

<style module>
  .container{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
