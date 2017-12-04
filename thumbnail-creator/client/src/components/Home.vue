<template>
  <div :class="$style.container">
    <upload-form/>
    <list/>
  </div>
</template>

<script>
import UploadForm from '@/components/uploadForm.vue'
import List from '@/components/list.vue'

export default {
  name: 'Home',
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
