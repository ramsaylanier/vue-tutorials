import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/components/pages/game/List.vue'
import GameSingle from '@/components/pages/game/Single.vue'
import RuleList from '@/components/pages/game/rule/List.vue'
import RuleSingle from '@/components/pages/game/rule/Single.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GameList
    },
    {
      path: '/game/:id',
      name: 'Game',
      component: GameSingle,
      children: [
        {
          path: 'rules',
          name: 'Game Rules',
          components: {
            page: RuleList
          },
          meta: {
            showModal: false
          }
        },
        {
          path: 'rules/:ruleId',
          name: 'Game Rule',
          components: {
            page: RuleList,
            rule: RuleSingle
          },
          meta: {
            showModal: true
          }
        }
      ]
    }
  ]
})
