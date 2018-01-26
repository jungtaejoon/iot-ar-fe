<template>
  <div id="wrapper">
    <left-side></left-side>
    <div id="page-wrapper" class="gray-bg">
      <common-header></common-header>
      <div class="wrapper wrapper-content">
        <router-view></router-view>
        <common-footer></common-footer>
      </div>
    </div>
    <div class="background-overlay"></div>
  </div>
</template>

<script>
import LeftSide from './LeftSide'
import CommonHeader from './Header'
import CommonFooter from './Footer'

export default {
  components: {
    LeftSide, CommonHeader, CommonFooter
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      window.innerWidth < 769 ? document.body.classList.add('body-small') : document.body.classList.remove('body-small')
    }
  }
}
</script>

<style src="../assets/css/admin.css"></style>
