<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="slimScrollDiv" style="width: auto; height: 100%; overflow: hidden; position: relative;">
      <div class="sidebar-collapse" style="width: auto; height: 100%; overflow: hidden;">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="profile-element"> <span>
                            <img alt="image" src="/static/img/kepco/webLogo_170.png" style="max-width: 160px;"/>
                             </span>

            </div>
            <div class="logo-element">
              IN+
            </div>
          </li>
          <li>
            <router-link to="/admin/members" exact><i class="fa fa-group"></i> <span class="nav-label">사원 조회</span></router-link>
          </li>
          <li>
            <router-link to="/admin/facilities" exact><i class="fa fa-cubes"></i> <span class="nav-label">설비 조회</span></router-link>
          </li>
          <li>
            <a href="/admin/sensors"><i class="fa fa-microchip"></i> <span class="nav-label">센서 조회</span></a>
          </li>
          <li>
            <a href="/admin/works"><i class="fa fa-briefcase"></i> <span class="nav-label">설비 관리</span></a>
          </li>
          <!--<li>-->
          <!--<a href="/sensor-histories"><i class="fa fa-line-chart"></i> <span class="nav-label">센서 내역 조회</span></a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
