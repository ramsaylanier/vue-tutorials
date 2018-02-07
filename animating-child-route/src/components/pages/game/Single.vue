<template>
  <div class="page">
    <div class="header">
      <div class="wrapper">
        <h1 class="title">{{game.title}}</h1>
      </div>
    </div>
    <div class="body">
      <div class="wrapper">
        <router-view name="page"/>
      </div>
    </div>

    <modal v-if="showModal" ref="modal">
      <router-view name="rule"/>
    </modal>
  </div>
</template>

<script>
import games from '@/data/games'
import Modal from '@/components/Modal'

export default {
  name: 'Game',
  components: {
    Modal
  },
  data () {
    return {
      game: games.filter(game => game.id === parseInt(this.$route.params.id))[0],
      showModal: this.$route.meta.showModal
    }
  },
  watch: {
    '$route.meta' ({showModal}) {
      this.showModal = showModal
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/_colors";
  .page{
    padding: 0;
  }

  .header{
    background-color: white;
    padding: 1rem;
    text-align: center;
  }

  .wrapper{
    max-width: 800px;
    margin: 0 auto;
  }

  .title{
    font-size: 3rem;
    font-weight: 100;
    color: $primary;
  }

</style>
