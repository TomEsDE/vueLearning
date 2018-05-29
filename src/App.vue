<template>
  <div id="app">
    <header>
      <span style="float: left">Vue.js PWA - My first Vue Application</span>
      <div v-if="$refs.login && $refs.login.user.id" class="header-user">
        <span style="font-size:12px">Name: </span><span class="header-user-text" v-text="$refs.login.user.username" />
          <span v-if="$refs.login.user.account" style="font-size:12px"> Balance: <span class="header-user-text" v-text="$refs.login.user.account.balance" /></span>
      </div>
    </header>
    <main>

      <transition-group class="errors" name="list" tag="p">
        <div v-for="error in errors" :class='getGlobalMessageClass(error)' :key="error.id">
          <span v-text="error.msg" />
          <button type="button" class="close" aria-label="Close" v-on:click="removeError(error.id)">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </transition-group>

      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <router-view></router-view>
      <Login ref="login" v-on:onLogin="onLogin($event)" />
    </main>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'
import Login from '@/components/Login'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import 'vue-popperjs/dist/css/vue-popper.css'
import '@/assets/css/obvious-buttons.css'

export default {
  name: 'app',
  ready: true,
  data: function () {
    return {
      errorCount: 0,
      errors: []
    }
  },
  computed: {
    // a computed getter
  },
  components: { Login },
  methods: {
    getGlobalMessageClass: function (error) {
      // `this` points to the vm instance
      if (error.type) {
        switch (error.type) {
          case 'error': return 'alert alert-danger'
          case 'info': return 'alert alert-warning'
          case 'success': return 'alert alert-success'
          default: return 'alert alert-info'
        }
      } else {
        return 'alert alert-info'
      }
    },
    show: function () {
      // this.$modal.show('login')
      // $('#loginModal').modal('show')
      $('#loginModal').modal({backdrop: 'static', keyboard: false})
    },
    hide: function () {
      // this.$modal.hide('login')
      $('#loginModal').modal('hide')
    },
    onLogin: function () {
      this.hide()
      this.addError({ msg: 'Login erfolgreich', type: 'success' })
    },
    addError: function (error) {
      error['id'] = this.errorCount++
      this.errors.push(error)

      if (!error.sticky) {
        setTimeout(() => {
          this.removeError(error.id)
        }, 5000)
      }
    },
    removeError: function (id) {
      this.errors.some((error, index) => {
        if (error.id === id) {
          this.errors.splice(index, 1)
          return true
        }
      })
    }
  },
  mounted () {
    // this.addError({ msg: 'test-error-message 1 adf asdf asdfasdlfklfjslfjalsdfj aksj följ asöldfj ölasj dfljalsöd fj', type: 'error' })
    // this.addError({ msg: 'test-info-message 2', type: 'info', sticky: true })
    // this.addError({ msg: 'test-error-message 3', type: 'error' })
    // this.addError({ msg: 'test-success-message 20', type: 'success', sticky: true })
    // this.show()

    // Listen to the event.
    EventBus.$off('sending-login-event') // um 'multiple' Listener-Anmeldungen zu vermeiden
    EventBus.$on('sending-login-event', msg => {
      console.log('event-msg: ' + msg)
      this.show()
      this.addError({ msg: 'Login erforderlich', type: 'info' })
    })

    // bootstrap modal listener
    $('#loginModal').on('hide.bs.modal', function (e) {
      // console.log('#loginModal getting closed')
      // EventBus.$emit('login-hide')
      // // check login, if false -> prevent from hiding
      // var login = true
      // if (!login) {
      //   e.preventDefault()
      // }
    })

    // bootstrap modal listener
    $('#loginModal').on('shown.bs.modal', function (e) {
      // this.$refs.login.liveValidation = true
      EventBus.$emit('login-shown')
    })

    // Listen to the event.
    EventBus.$off('global-error') // um 'multiple' Listener-Anmeldungen zu vermeiden
    EventBus.$on('global-error', error => {
      this.addError(error)
      // error['id'] = this.errorCount++
      // this.errors.push(error)
    })
  }
}

document.addEventListener('keyup', (event) => {
  const keyName = event.key

  var directionKeys = ['8', '9', '6', '3', '2', '1', '4', '7']

  // if one of the direction keys are pressed, send a message via the event-bus
  if (directionKeys.find(d => keyName === d)) {
    console.log('keyName: ' + keyName)
    EventBus.$emit('kompass-key-event', keyName)
  }
}, false)
</script>

<style scoped>
.errors {
  position: fixed;
  bottom: 0;
  /* margin-top: 30px; */
  width: 80%;
  z-index: 10000;
  left: calc(50% - 40%);
  opacity: 0.9;
}
.errors div {
  margin-bottom: 0.5rem
}
.list-enter-active, .list-leave-active {
  transition: all 0.8s;
}
.list-leave-to /* .list-leave-active below version 2.1.8 */ {
  /* animation: hideme 0.5s forwards; */
  opacity: 0;
  transform: translateX(30px);
}
.list-enter {
  opacity: 0;
  transform: translateX(-30px);
}
@keyframes hideme {
  100% {
    opacity: 0;
    height: 0;
    margin-bottom: 0;
    padding: 0;
  }
}
</style>

<style>
:root {
  --input-padding-x: .75rem;
  --input-padding-y: .75rem;
}

body {
  margin: 0;
  /*
	background: url(http://i.imgur.com/GHr12sH.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  /* display: block; */
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.header-user {
  float: right;
  padding-top: 16px;
}
.header-user {
  font-size: 12px;
}

.header-user-text {
  font-size: 20px;
}
</style>
