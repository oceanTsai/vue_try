<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button  @click="updateState()">test</button>
    
    <p v-show="title">Checkout {{ title }}.</p>
    <p >YEAR {{ title }}.</p>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  //每次都會執行
  methods: {
    updateState (e) {
      console.log('xxxx', this)
      this.$store.dispatch('app/updateState', {"title": "xxxxx"})
    }
  },
  //當數值有改變時才異動
  computed: {
    ...mapGetters({
      title: 'app/title'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
