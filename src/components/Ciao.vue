<template>
  <div>
	  <mynav ref="nav" :showTwitch="true"/>
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" v-on:click="deleteJwt">delete jwt</button>
    <button class="btn btn-primary" v-on:click="createGlobalMessage">create global Message</button>
    
    <button class="btn btn-primary" v-on:click="createUser">create New User</button>
    <button class="btn btn-primary" v-on:click="editUser">edit User {{userId}}</button>
    <user ref="userDlg" :userId="userId" :create="createNewUser" />
  </div>
    
</template>

<script>
import mynav from './mynav.vue'
import user from './User.vue'
import { EventBus } from '../event-bus.js'
import jscookie from 'js-cookie'

var message = 'Ciao du Dödeli'
export default {
  data () {
    return {
      msg: message,
      createNewUser: false,
      userId: 19
    }
  },
  components: { mynav, user },
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
      this.show()
    },
    editUser () {
      this.createNewUser = false
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
    // this.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
