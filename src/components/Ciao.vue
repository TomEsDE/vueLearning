<template>
  <div>
	  <mynav ref="nav" :showTwitch="true"/>
    <h1>{{ msg }}</h1>

    <div class="d-inline">
      <button class="btn btn-primary btn-inline" v-on:click="deleteJwt">delete jwt</button>
      <button class="btn btn-primary btn-inline" v-on:click="createGlobalMessage">create global Message</button>

      <button class="btn btn-primary btn-inline" v-on:click="createUser">create New User</button>
      <button class="btn btn-primary btn-inline" v-on:click="editUser">edit User {{userId}}</button>
    </div>

    <user ref="userDlg" :userId="userId" :create="createNewUser" />
    <!-- <user2 ref="userComp2" :userId="userId" :create="create" :modal="false" /> -->

    <table id="table" data-pagination="true" data-search="true" data-toggle="table" data-url="http://jsonplaceholder.typicode.com/posts">
      <thead>
          <tr>
              <th data-sortable="true" data-field="id">Item ID</th>
              <th data-field="title">title</th>
              <th data-field="body">Text</th>
          </tr>
      </thead>
    </table>
  </div>

</template>

<script>
import mynav from './mynav.vue'
import user from './UserModal.vue'
import user2 from './User.vue'
import { EventBus } from '../event-bus.js'
import jscookie from 'js-cookie'
import $ from 'jquery'

var message = 'Ciao du Dödeli'
export default {
  data () {
    return {
      msg: message,
      createNewUser: false,
      userId: 11
    }
  },
  components: { mynav, user, user2 },
  methods: {
    // access child data!
    deleteJwt () {
      this.msg = 'Are Viderci'
      jscookie.set('jwt', 'duemm-di-duemm')
    },
    createGlobalMessage () {
      let types = ['info', 'success', 'error']
      let randomType = types[Math.floor((Math.random() * 3))]
      EventBus.$emit('global-error', { msg: 'Global Message ' + randomType, type: randomType, sticky: Math.random() < 0.5 })
    },
    createUser () {
      this.createNewUser = true
      // this.$refs.userDlg.isCreate = true
      this.$refs.userDlg.setData(true, null)
      this.show()
    },
    editUser () {
      this.createNewUser = false
      this.$refs.userDlg.setData(false, this.userId)
      this.show()
    },
    show () {
      this.$refs.userDlg.show()
    },
    hide () {
      this.$refs.userDlg.hide()
    }
  },
  mounted () {
    $('#table').bootstrapTable()
    // this.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
