<template>
  <div id="app">
    <header>
      <span>Vue.js PWA - My first Vue Application</span>
    </header>
    <main>
      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <router-view></router-view>
      <Login />
    </main>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'
import Login from '@/components/Login'

export default {
  name: 'app',
  ready: true,
  data: function () {
    return {
      soso: true
    }
  },
  components: { Login },
  methods: {
    show () {
      this.$modal.show('login')
    },
    hide () {
      this.$modal.hide('login')
    }
  },
  mounted () {
    // this.show()

    // Listen to the event.
    EventBus.$on('sending-login-event', msg => {
      console.log('event-msg: ' + msg)
      this.show()
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

<style>
body {
  margin: 0;
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
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
