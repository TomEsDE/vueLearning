<template>
  <div>
	  <mynav ref="nav" :showTwitch="false"/>
    <h1>{{ msg }}</h1>
    <p><a v-on:click="test" target="_self" rel="noopener">test</a></p>
  </div>
    
</template>

<script>
import mynav from './mynav.vue'

var message = 'Ciao du Dödeli'
export default {
  data () {
    return {
      msg: message
    }
  },
  components: { mynav },
  methods: {
    // access child data!
    test () {
      console.log('mynav.links: ' + this.$refs.nav.links[Math.ceil(Math.random() * 4)].desc)
      this.msg = 'Are Viderci'
    },
    show () {
      this.$modal.show('hello-world')
    },
    hide () {
      this.$modal.hide('hello-world')
    }
  },
  mounted () {
    console.log('created - modal: ' + this.$modal)
    this.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
