<template>
  <div>
    <h3 class="title">Rules</h3>
    <ul class="list">
      <li class="list-item" v-for="rule in game.rules" :key="rule.id">
        <router-link class="link" :to="{name: 'Game Rule', params: {ruleId: rule.id}}">
          {{excerpt(rule.text)}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import games from '@/data/games'

export default {
  name: 'rule-list',
  data () {
    return {
      game: games.filter(game => game.id === parseInt(this.$route.params.id))[0]
    }
  },
  methods: {
    excerpt (text) {
      return text.substr(0, 100) + '...'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../styles/_colors.scss";

  .title{
    font-size: 2rem;
    color: white;
    font-weight: 100;
    margin: 2rem 0;
  }

  .list{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list-item{
    &:not(:last-of-type){
      margin-bottom: .5rem;
    }
  }

  .link{
    display: block;
    padding: 1rem;
    color: $primary;
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 3px;
    background-color: white;

    &:hover{
      background-color: $secondary;
      color: white;
    }
  }
</style>
