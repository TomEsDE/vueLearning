<template>
  <div>
	  <mynav ref="nav" :showTwitch="false"/>
    <h1>{{ msg }}</h1>
    <h3>code : {{ code }}</h3>
    <h3>{{ accesstoken }}</h3>
  </div>
    
</template>


<script>
import mynav from './mynav.vue'
import axios from 'axios'

export default {
  name: 'twitch',
  data () {
    return {
      msg: 'Login Twitch Result',
      code: this.$route.query.code,
      accesstoken: '',
      user: [],
      errors: []
    }
  },
  components: { mynav },
  methods: {
    oauth () {
      axios.get('oauth?code=' + this.code).then(resp => {
        this.accesstoken = resp.data
        console.log(resp.data)
      }).catch(e => this.errors.push)
    }
  },
  created () {
    this.oauth()
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
