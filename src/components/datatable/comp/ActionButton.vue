<template>
  <div>
    <b-dropdown right text="Action" variant="success">
      <b-dropdown-item v-b-modal.modal1>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Something else here...</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>

  </div>
</template>

<script>
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown'
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'
import bDropdownDivider from 'bootstrap-vue/es/components/dropdown/dropdown-divider'

import bModal from 'bootstrap-vue/es/directives/modal/modal'

export default {
  components: {
    bDropdown, bDropdownItem, bDropdownDivider
  },
  directives: {
    bModal
  }
}
</script>

<style scoped src="../../../assets/css/bootstrap4/bootstrap.min.css"></style>
<style>
  button {
    cursor: pointer;
  }
</style>
