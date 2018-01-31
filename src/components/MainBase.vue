<template>
  <div>
    <div class="wrapper">
      <left-side></left-side>
      <right-side>
        <router-view></router-view>
        <b-card>
          <h4>Background Primary Modal </h4>
          <b-btn v-b-modal.modal8>Primary modal</b-btn>
          <!-- Modal Component -->
          <b-modal id="modal8" title="Priamry Modal"
                   header-bg-variant="primary"
                   header-text-variant="light"
                   footer-bg-variant="primary"
                   footer-text-variant="light"
                   size="md">
            <h1> Primary modal</h1>
          </b-modal>
        </b-card>
        <common-footer></common-footer>
      </right-side>
    </div>
    <div class="background-overlay"></div>
  </div>
</template>

<script>
import LeftSide from './left-side/LeftSide'
import RightSide from './right-side/RightSide'
import CommonHeader from './CommonHeader'
import CommonFooter from './Footer'
import types from '../store/mutation-type'
import swal from 'sweetalert2'

export default {
  components: {
    LeftSide, RightSide, CommonHeader, CommonFooter
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    this.$store.commit(types.SET_REFRESH_INTERVAL, setInterval(this.$store.commit.bind(null, types.REFRESH_LOGIN_STATE), 1000))
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
  },
  watch: {
    isLoggedIn: {
      handler (isLoggedIn) {
        if (!isLoggedIn) {
          this.$store.commit(types.CLEAR_REFRESH_INTERVAL)
          swal('세션 만료', '세션이 만료되었습니다.', 'error').then(() => this.$router.push('/'))
        }
      }
    }
  }
}
</script>
<style src="../assets/css/metisMenu.css"></style>
<style lang="scss" src="../assets/sass/dark/custom.scss"></style>
<style>
  body.fixed-header #app .navbar {
    position: relative;
  }

  body.fixed-header #app .header {
    margin-bottom: 0;
  }
</style>
