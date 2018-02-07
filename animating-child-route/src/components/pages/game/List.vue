<template>
  <div class="page">
    <div class="body">
      <h1 class="title">Games</h1>
      <ul class="list">
        <li class="list-item" v-for="game in games" :key="game.id">
          <router-link class="link" :to="{name: 'Game Rules', params: {id: game.id}}">
            {{game.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import games from '@/data/games'
export default {
  name: 'Todos',
  data () {
    return {
      games
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/_colors.scss";

  .page{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body{
    padding: 0;
    display: flex;
    flex-flow: column;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .title{
    font-size: 3rem;
    font-weight: 100;
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
    background-color: $primary;
    display: block;
    padding: 1rem;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 3px;

    &:hover{
      background-color: $secondary;
    }
  }
</style>
