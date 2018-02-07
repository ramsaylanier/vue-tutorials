<template>
  <div class="rule">
    <div class="body">
      <p class="text">{{rule.text}}</p>
    </div>
    <div class="menu">
      <ul>
        <li><button><delete-icon fill="white"/></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import games from '@/data/games'
import DeleteIcon from '@/components/icons/Delete'
export default {
  name: 'rule',
  components: {
    DeleteIcon
  },
  computed: {
    rule () {
      const {id, ruleId} = this.$route.params
      const game = games.find(game => game.id === parseInt(id))
      return game.rules.find(rule => rule.id === parseInt(ruleId))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../styles/_colors.scss";
  .rule{
    height: 100%;
    background-color: darken(white, 5%);
    position: relative;
  }

  .body{
    padding: 2rem;
    background-color: white;
  }

  .text{
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .menu{
    position: absolute;
    bottom: -1rem;
    left: 0;

    ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }

    button{
      position: absolute;
      bottom: -4rem;
      left: 0;
      border: 0;
      height: 4rem;
      width: 4rem;
      background-color: $secondary;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      svg{
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
