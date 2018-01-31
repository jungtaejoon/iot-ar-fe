<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="left-aside sidebar-offcanvas">
    <!-- sidebar: style can be found in sidebar -->
    <section class="sidebar">
      <div id="menu" role="navigation">
        <div class="nav_profile">
          <menu-logo></menu-logo>
        </div>
        <vmenu>
          <vmenu-item link="/admin/members" icon="ti-desktop">
            &nbsp; 사원 관리
          </vmenu-item>
          <vmenu-item link="/admin/facilities" icon="ti-layout">
            &nbsp; 설비 조회
          </vmenu-item>
        </vmenu>
      </div>
    </section>
  </aside>
</template>

<script>
import vmenu from './menu/vueMenu'
import vmenuItem from './menu/MenuItem'
import vsubMenu from './menu/subMenu'
import MenuLogo from './menu/MenuLogo'

export default {
  name: 'left-side',
  components: {
    vmenu,
    vmenuItem,
    vsubMenu,
    MenuLogo
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
