<template>
  <modal name="login">
    <h1>{{ msg }}</h1>
  </modal>    
</template>

<script>

var message = 'Login'
export default {
  data () {
    return {
      msg: message
    }
  },
  components: { },
  methods: {
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
