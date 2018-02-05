<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="검색" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"/>
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="정렬" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-input-group-append>
              <b-form-select :disabled="!sortBy" v-model="sortDesc">
                <option :value="false">Asc</option>
                <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0"/>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="행 수" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table show-empty
             stacked="md"
             :items="itemsProvider"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
    >
      <template slot="action" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
import axios from 'axios'
import { contextConverter } from './table-rows-context-converter'

const API_PATH = '/api/members/pageable'

export default {
  data: () => ({
    fields: [
      {label: '사용자 ID', key: 'username', sortable: true},
      {label: '이름', key: 'name', sortable: true},
      {label: '권한', key: 'memberRole', class: 'center', sortable: true},
      {label: '휴대전화', key: 'phoneNumber', sortable: true},
      {label: 'ACTION', key: 'action'}
    ],
    currentPage: 1,
    perPage: 20,
    totalRows: 0,
    pageOptions: [20, 50, 100],
    defaultSortBy: 'username',
    sortBy: null,
    sortDesc: false,
    filter: null,
    modalInfo: {title: '', content: ''}
  }),
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return {text: f.label, value: f.key} })
    }
  },
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    itemsProvider (ctx) {
      return axios.get(API_PATH + '?' + contextConverter(ctx, this.defaultSortBy)).then(({data}) => {
        this.totalRows = data.total
        return data.list
      })
    }
  }
}
</script>

<style scoped>

</style>
