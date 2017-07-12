<template>
  <div id="app">
      <!-- <router-view></router-view> -->
      <progress-bar :progress="percent" :width="200" :stroke-width="strokeWidth"></progress-bar>
      <br>
      percent:<input type="range" name="percent" min="0" max="100" v-model.number="percent">
      <br>
      stroke width:<input type="range" name="strokeWidth" min="0" max="150" v-model.number="strokeWidth">
  </div>
</template>
<script>
  import Vue from 'vue'
  // import NProgress from 'src/components/NProgress'
  // import { mapGetters } from 'vuex'
  // Vue.component('n-progress', NProgress)
  
  export default {
    data () {
      return {
        percent: 55.55,
        strokeWidth: 20
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  ::-webkit-scrollbar
    width 4px
    height 4px
    background-color $color-gray
  ::-webkit-scrollbar-button
  ::-webkit-scrollbar-track
    display none
  ::-webkit-scrollbar-thumb
    background-color $color-silver-light
  ::-webkit-scrollbar-thumb:hover
    background-color $color-black-exact-light

  html
    font-size 16px
    font-family "Helvetica Neue", Helvetica, Tahoma, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "微软雅黑", "WenQuanYi Micro Hei", Arial, sans-serif
    height 100%

  body
    height 100%
    margin 0
    padding 0
    font-size .75rem
    /* font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;*/
    /* font-size 15px*/
    /* background-color lighten(#eceef1, 30%)*/
    color #34495e

    overflow auto
    #app
      height 100%
      
</style>