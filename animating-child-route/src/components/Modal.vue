<template>
  <transition
    v-bind:css="false"
    v-on:enter="enter"
    v-on:leave="leave"
    appear
  >
    <div class="modal">
      <div class="inner">
        <button class="close-button" @click="handleClose"><close-icon/></button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import {TweenMax, Power4} from 'gsap'
import CloseIcon from '@/components/icons/Close.vue'
export default {
  name: 'modal',
  components: {
    CloseIcon
  },
  methods: {
    enter (el, done) {
      TweenMax.fromTo(el, 0.5, {
        alpha: 0
      }, {
        alpha: 1,
        ease: Power4.easeOut
      })
    },
    leave (el, done) {
      TweenMax.to(el, 0.5, {
        alpha: 0,
        ease: Power4.easeOut,
        onComplete: done
      })
    },
    handleClose () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/_colors.scss";

  .modal{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: fade-out(black, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner{
    background-color: white;
    width: 800px;
    position: relative;
  }

  .close-button{
    position: absolute;
    top: -40px;
    right: 0;
    border: 0;
    height: 40px;
    width: 40px;
    background-color: darken(white, 5%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      width: 30px;
      height: 30px;
    }
  }

</style>
