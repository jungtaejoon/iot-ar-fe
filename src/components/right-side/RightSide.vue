<template>
  <aside class="right-aside">
    <!-- Content Header (Page header) -->
    <div class="right-header-container">
      <right-header></right-header>
    </div>
    <!-- Main content -->
    <section class="content">
      <slot></slot>
      <!--rightside bar -->
      <right-side-bar></right-side-bar>
    </section>
    <!-- /.content -->
  </aside>
</template>
<script>
import RightSideBar from './RightSideBar'
import RightHeader from '../Header'

export default {
  components: {
    RightSideBar, RightHeader
  }
}
</script>

<style>
  div.right-header-container {
    margin-bottom: 50px;
  }
</style>
