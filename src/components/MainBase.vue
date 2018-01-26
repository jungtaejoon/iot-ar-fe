<template>
  <div>
    <clear_header></clear_header>
    <div class="wrapper">
      <left_side v-show="this.$store.state.left_open"></left_side>
      <router-view></router-view>
    </div>
    <div class="background-overlay" @click="right_close"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
