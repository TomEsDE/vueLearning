<template>
  <div class="hello">
	  <mynav :showTwitch="true"/>
    <button v-on:click="loginTwitch"><h1>{{ msg }}</h1></button>
    <span id="count" v-text="count"></span>

    <br />
    <br />
    <br />
    <paging ref="paging" :dataSize="users.length" :page-size="pageSize" v-on:setPage="onSetPage($event)" />

    <div v-show="users.length > 0" class="container">
    <div class="table-responsive">
    <table class="table table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col" :class="header[2].align">
            <span class="header">#</span>
          </th>
          <th scope="col" :class="header[2].align">
            <span class="header">action</span>
          </th>
          <th scope="col" :class="h.align" v-for="(h, index) in header" v-bind:key="h.data" @click="sort(index)">
            <span class="header" v-text="h.desc" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of usersPage" v-bind:key="user.id">
          <td :class="header[2].align" :data-title="header[2].desc">
            <span v-text="user.id"></span>
          </td>
          <td :class="header[2].align" :data-title="header[2].desc">
            <a class="edit" v-on:click.prevent="onEditUser(user.id)">
              <font-awesome-icon icon="user-edit" size="lg" />
            </a>
            <!-- <font-awesome-icon icon="spinner" size="lg" pulse /> -->
            <!-- <font-awesome-icon :icon="['far', 'spinner']" /> -->
          </td>
          <td :class="header[0].align" :data-title="header[0].desc">
            <span v-text="user.username"></span>
          </td>
          <td :class="header[1].align" :data-title="header[1].desc">
            <span v-text="user.email"></span>
          </td>
          <td :class="header[2].align" :data-title="header[2].desc">
            <span v-text="user.account.balance"></span>
          </td>
          <td :class="header[3].align" :data-title="header[3].desc">
            <span v-text="formatTime(user.createTime)"></span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

    <paging ref="paging" :dataSize="users.length" :page-size="pageSize" v-on:setPage="onSetPage($event)" />
    </div>
    
    <!-- <div class="container invisible">
      <div class="method">

        <div class="row margin-0 list-header hidden-sm hidden-xs">
          <div :class="'col-md-' + h.colsize" v-for="(h, index) in header" v-bind:key="h.data" @click="sort(index)">
            <div class="header" v-text="h.desc" />
          </div>
        </div>

        <div class="row margin-0" v-for="user of posts" v-bind:key="user.id">
          <div :class="'col-md-' + header[0].colsize + ' cell'" :data-title="header[0].desc">
            <span v-text="user.username"></span>
          </div>
          <div :class="'col-md-' + header[1].colsize + ' cell'" :data-title="header[1].desc">
            <span v-text="user.email"></span>
          </div>
          <div :class="'col-md-' + header[2].colsize + ' cell'" :data-title="header[2].desc">
            <span v-text="user.account.balance"></span>
          </div>
          <div :class="'col-md-' + header[3].colsize + ' cell'" :data-title="header[3].desc">
            <span v-text="formatTime(user.createTime)"></span>
          </div>
        </div>

      </div>
    </div> -->
    
    <!--
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    -->

    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" v-bind:key="index">
        {{error.message}}
      </li>
    </ul>
    <user ref="userDlg" />
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import mynav from './mynav.vue'
import user from './UserModal.vue'
import paging from './table-pagination.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import $ from 'jquery'
// import PerfectScrollbar from 'perfect-scrollbar'
import t from 'typy'
import jscookie from 'js-cookie'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'twitch',
  ps: null,
  data () {
    return {
      msg: 'Login Twitch',
      posts: [],
      header: [
        {desc: 'Name', data: 'username', type: 'char', colsize: 3, align: 'text-left'},
        {desc: 'Email', data: 'email', type: 'char', colsize: 3, align: 'text-left'},
        {desc: 'Balance', data: 'account.balance', type: 'number', colsize: 1, align: 'text-right'},
        {desc: 'registriert seit', data: 'createTime', type: 'number', colsize: 5, align: 'text-left'}],
      users: [],
      usersPage: [],
      pageSize: 15,
      errors: []
    }
  },
  components: { mynav, paging, FontAwesomeIcon, user },
  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,

      // passing the string value 'count' is same as `state => state.count`
      countAlias: 'count',

      // to access local state with `this`, a normal function must be used
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  },
  methods: {
    // a computed getter
    formatTime: function (timestamp) {
      // `this` points to the vm instance
      return new Date(timestamp).toUTCString()
    },
    test () {
      axios.get('http://jsonplaceholder.typicode.com/posts').then(resp => {
        this.posts = resp.data
      }).catch(e => this.errors.push)
    },
    onEditUser (userId) {
      this.$refs.userDlg.setData(false, userId)
      this.show()
    },
    getuserAll: function (init) {
      let token = jscookie.get('jwt')
      console.log('jwt cookie: ' + token)
      axios.get('getAll', {
        headers: {
          Authorization: 'Bearer ' + token
          // 'test': 'test-1'
        }
      }).then(resp => {
        this.users = resp.data
        var list = [...Array(10).keys()]
        var counter = 100
        list.forEach(i => {
          resp.data.forEach(element => {
            let userCopy = $.extend(true, {}, element)
            userCopy.id = counter++
            // console.log('id: ' + userCopy.id)
            this.users.push(userCopy)
          })
        })

        if (init && this.users.length > 0) {
          this.onSetPage(0)
        }
      }).catch(e => {
        console.log(e)
        var msg = e.message
        if (e.response.status === 401) {
          EventBus.$emit('sending-login-event', 'show modal login dialog')
          msg = 'Login erforderlich'
        } else {
          EventBus.$emit('global-error', { msg: msg, type: 'error', sticky: true })
        }
      })
    },
    sort: function (col) {
      let nestedKey = this.header[col].data
      let type = this.header[col].type
      // console.log(nestedKey)
      // console.log('users.length: ' + this.users.length)
      this.users.sort(function (a, b) {
        // console.log(t(a, nestedKey).safeObject)
        var nameA = t(a, nestedKey).safeObject
        var nameB = t(b, nestedKey).safeObject
        if (type === 'char') {
          nameA = nameA.toUpperCase() // ignore upper and lowercase
          nameB = nameB.toUpperCase() // ignore upper and lowercase
        }

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        // namen müssen gleich sein
        return 0
      })
      this.onSetPage(this.$refs.paging.activePage - 1)
      // this.onSetPage(0)
      // this.$refs.paging.activePage = 1
    },
    onSetPage: function (page) {
      let from = page * this.pageSize
      console.log('from: ' + from)
      console.log('users.length: ' + this.users.length)
      this.usersPage = this.users.slice(from, from + this.pageSize)
      // console.log('usersPage.length: ' + this.usersPage.length)
    },
    loginTwitch () {
      axios.get('loginTwitchGetUrl').then(resp => {
        console.log(resp.data)
        window.location = resp.data
      }).catch(e => this.errors.push)
    },
    show () {
      this.$refs.userDlg.show()
    },
    hide () {
      this.$refs.userDlg.hide()
    }
  },
  created () {
    // this.test()
    // this.getuser(11)
  },
  mounted () {
    this.getuserAll(true)
    console.log('count: ' + $('#count').text())

    // EventBus.$emit('global-error', { msg: 'test-error', type: 'error', sticky: false })
    /*
    this.ps = new PerfectScrollbar('#container', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    })
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.edit {
  opacity: 0.5;
}
.edit:hover {
  opacity: 1;
  cursor: pointer;
  animation: pulse 1.5s infinite;;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(184, 153, 41, 0.4);
    box-shadow: 0 0 0 0 rgba(184, 153, 41, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(184, 153, 41, 0);
      box-shadow: 0 0 0 10px rgba(184, 153, 41, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(184, 153, 41, 0);
      box-shadow: 0 0 0 0 rgba(184, 153, 41, 0);
  }
}

#container {
  position: relative;
  /*width: 900px;*/
  height: 550px;
}

.table {
  text-align: left;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header1 header2 header3 header4 header5 header6'
    'row1 row2 row3 row4 row5 row6';
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.method .header, .method .cell {
  padding: 6px 6px 6px 10px; }
.method .list-header .header {
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #999;
  background-color: #eee; }
.method [class^="row"],
.method [class*=" row"] {
  border-bottom: 1px solid #ddd; }
  .method [class^="row"]:hover,
  .method [class*=" row"]:hover {
    background-color: #f7f7f7; }
.method .cell {
  font-size: 0.85em; }
  .method .cell .mobile-isrequired {
    display: none;
    font-weight: normal;
    text-transform: uppercase;
    color: #aaa;
    font-size: 0.8em; }
  .method .cell .propertyname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .method .cell .type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .method .cell code {
    color: #428bca; }
  .method .cell a, .method .cell a:hover {
    text-decoration: none; }
  .method .cell code.custom {
    color: #8a6d3b;
    text-decoration: none; }
  .method .cell .text-muted {
    color: #ddd; }
@media (max-width: 991px) {
  .method [class^="row"],
  .method [class*=" row"] {
    padding-top: 10px;
    padding-bottom: 10px; }
  .method .cell {
    padding: 0 10px; }
    .method .cell .propertyname {
      font-weight: bold;
      font-size: 1.2em; }
      .method .cell .propertyname .lookuplink {
        font-weight: normal;
        font-size: 1.5em;
        position: absolute;
        top: 0;
        right: 10px; }
    .method .cell .type {
      padding-left: 10px;
      font-size: 1.1em; }
    .method .cell .isrequired {
      padding-left: 10px;
      display: none; }
    .method .cell .description {
      padding-left: 10px; }
    .method .cell .mobile-isrequired {
      display: inline; } }
      

@media screen and (max-width: 768px) {

  .row {
    display: block;
  }

  .row.header {
    padding: 0;
    height: 0px;
  }

  .row.list-header {
    display: none;
  }

  .row .cell:before {
    font-family: Poppins-Bold;
    font-size: 12px;
    color: #808080;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: unset !important;

    margin-bottom: 13px;
    content: attr(data-title);
    min-width: 98px;
    display: block;
  }
}


/* Row Utilities */
[class^='row'].margin-0,
[class*=' row'].margin-0,
[class^='form-group'].margin-0,
[class*=' form-group'].margin-0 {
  margin-left: -0px;
  margin-right: -0px; }
  [class^='row'].margin-0 > [class^='col-'],
  [class^='row'].margin-0 > [class*=' col-'],
  [class*=' row'].margin-0 > [class^='col-'],
  [class*=' row'].margin-0 > [class*=' col-'],
  [class^='form-group'].margin-0 > [class^='col-'],
  [class^='form-group'].margin-0 > [class*=' col-'],
  [class*=' form-group'].margin-0 > [class^='col-'],
  [class*=' form-group'].margin-0 > [class*=' col-'] {
    padding-right: 0px;
    padding-left: 0px; }
  [class^='row'].margin-0 [class^='row'],
  [class^='row'].margin-0 [class*=' row'],
  [class^='row'].margin-0 [class^='form-group'],
  [class^='row'].margin-0 [class*=' form-group'],
  [class*=' row'].margin-0 [class^='row'],
  [class*=' row'].margin-0 [class*=' row'],
  [class*=' row'].margin-0 [class^='form-group'],
  [class*=' row'].margin-0 [class*=' form-group'],
  [class^='form-group'].margin-0 [class^='row'],
  [class^='form-group'].margin-0 [class*=' row'],
  [class^='form-group'].margin-0 [class^='form-group'],
  [class^='form-group'].margin-0 [class*=' form-group'],
  [class*=' form-group'].margin-0 [class^='row'],
  [class*=' form-group'].margin-0 [class*=' row'],
  [class*=' form-group'].margin-0 [class^='form-group'],
  [class*=' form-group'].margin-0 [class*=' form-group'] {
    margin-left: 0;
    margin-right: 0; }
</style>
