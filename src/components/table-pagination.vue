<template>
  <div class="table-pagination">
  <div v-show="dataSize > 0">
    <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="'page-item ' + (activePage == 1 ? 'disabled' : '')">
        <button class="page-link" v-on:click="setPage(activePage - 2)" tabindex="-1">Previous</button>
      </li>
      <li v-for="(page, index) in pageArray" v-bind:key="index" :class="'page-item ' + isActive(page)">
        <span v-if="(page !== '...')">
          <button class="page-link" v-on:click="setPage(page + 0)" v-text="(page + 1)"/>
        </span>
        <span v-else v-text="page">
        </span>
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
      console.log('this.pageSteps : ' + this.pageSteps)
      let pageArray = [...Array(this.pageCount).keys()]
      pageArray = pageArray.filter((el, index) => {
        return el % this.pageSteps === 0 || Math.abs(el - (this.activePage - 1)) < 3 || index + 1 === pageArray.length
      })

      // Seitensprünge mit '...' visuell hervorheben
      let pageArrayB = []
      pageArray.forEach((page, index) => {
        if (page - pageArray[index - 1] > 1) {
          pageArrayB.push('...')
        }
        pageArrayB.push(page)
      })

      return pageArrayB
    },
    // a computed getter
    pageSteps: function () {
      console.log('this.pageCount : ' + this.pageCount)
      let divide = 5
      return Math.floor((this.pageCount / divide) < 1 ? 1 : (this.pageCount / divide))
    },
    pageCount: function () {
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
      if (page + 1 === this.activePage) {
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
      console.log('EventBus >> set-active-page')
      this.activePage = page
      // 'Page-Array' neu ausrichten
    })
  },
  created () {
    console.log('created')
    EventBus.$off('set-active-page') // um 'multiple' Listener-Anmeldungen zu vermeiden
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
