<template>
  <div id="app">
    <preloader v-show="this.$store.state.preloader"></preloader>
    <router-view/>
  </div>
</template>

<script>
import Preloader from './components/Preloader'

export default {
  components: {
    Preloader
  },
  mounted () {

  }
}
</script>
<style lang="scss" src="./assets/sass/bootstrap/bootstrap.scss"></style>
<style src="./vendors/font-awesome/css/font-awesome.min.css"></style>
<style src="./vendors/themify-icons/css/themify-icons.css"></style>
