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
  }
}
</script>
<style src="./vendors/bootstrap/dist/css/bootstrap.min.css"></style>
<style src="./vendors/font-awesome/css/font-awesome.min.css"></style>
