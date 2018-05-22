<template>
  <div class="table-pagination">
  <div v-show="dataSize > 0">
    <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="'page-item ' + (activePage == 1 ? 'disabled' : '')">
        <button class="page-link" v-on:click="setPage(activePage - 2)" tabindex="-1">Previous</button>
      </li>
      <li v-for="(page, index) in pageArray" v-bind:key="index" :class="'page-item ' + isActive(index + 1)">
        <button class="page-link" v-on:click="setPage(index)" v-text="index + 1"/>
      </li>
      <li :class="'page-item ' + (activePage == pageCount ? 'disabled' : '')">
        <a class="page-link" v-on:click="setPage(activePage)">Next</a>
      </li>
    </ul>
  </nav>
  </div>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'

export default {
  name: 'table-pagination',
  props: {
    dataSize: {
      type: Number,
      required: true,
      default: 0
    },
    pageSize: {
      type: Number,
      required: true,
      default: 20
    }
  },
  computed: {
    // a computed getter
    pageArray: function () {
      // `this` points to the vm instance
      return [...Array(this.pageCount).keys()]
    },
    pageCount: function () {
      // `this` points to the vm instance
      return Math.ceil(this.dataSize / this.pageSize)
    }
  },
  data () {
    return {
      activePage: 1
    }
  },
  methods: {
    isActive (page) {
      // console.log('page: ' + page + ' - activePage: ' + this.activePage)
      if (page === this.activePage) {
        return 'active'
      }
      return ''
    },
    setPage: function (index) {
      // this.activePage = index + 1
      EventBus.$emit('set-active-page', index + 1)
      this.$emit('setPage', index)
    }
  },
  mounted () {
    // Listen to the event.
    EventBus.$on('set-active-page', page => {
      this.activePage = page
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
