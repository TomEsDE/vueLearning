<template>
  <div class="hello">
	  <mynav :showTwitch="true"/>
    <button v-on:click="loginTwitch"><h1>{{ msg }}</h1></button>
    <span v-text="count"></span>
    <br />

    <p><strong>{{user.id}}</strong></p>
    <p>{{user.username}}</p>
    <p v-text="formatTime(user.createTime)"></p>
    <p>{{user.account.balance}}</p>

    <ul v-if="users && users.length">
      <li v-for="user of users" v-bind:key="user.id">
        <p><strong>{{user.id}}</strong></p>
        <p>{{user.username}}</p>
        <p>{{user.email}}</p>
        <p>{{user.account.balance}}</p>
      </li>
    </ul>
    
    <!--
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    -->

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import mynav from './mynav.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'twitch',
  data () {
    return {
      msg: 'Login Twitch',
      posts: [],
      user: {
        'id': null,
        'username': null,
        'email': null,
        'password': null,
        'createTime': null,
        'account': {
          'userId': null,
          'balance': null
        }
      },
      users: {...this.user},
      errors: []
    }
  },
  components: { mynav },
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
    getuser (id) {
      axios.get('get/' + id).then(resp => {
        this.user = resp.data
        console.log(resp)
      }).catch(e => this.errors.push)
    },
    getuserAll () {
      axios.get('getAll', {
        headers: {
          // Authorization: 'Bearer token-301739.38487642474'
          // 'test': 'test-1'
        }
      }).then(resp => {
        this.users = resp.data
      }).catch(e => this.errors.push)
    },
    loginTwitch () {
      axios.get('loginTwitchGetUrl').then(resp => {
        console.log(resp.data)
        window.location = resp.data
      }).catch(e => this.errors.push)
    }
  },
  created () {
    // this.test()
    this.getuser(11)
    this.getuserAll()
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
