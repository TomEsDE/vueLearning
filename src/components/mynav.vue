<template>
  <div class="rounded-list">
	<nav>
    <ol>
      <li v-for="link in links" v-bind:key="link.url">
          <router-link v-if="showLinkF(link.url)" v-bind:to="link.url">{{link.desc}}</router-link>
      </li>
    </ol>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'mynav',
  props: {
    showTwitch: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      links: [
        { url: '/', desc: 'Hello' },
        { url: '/twitch', desc: 'Twitch' },
        { url: '/ciao', desc: 'Ciao' },
        // { url: '/login', desc: 'Login' },
        { url: '/compass', desc: 'Kompass' },
        { url: '/test', desc: 'Test' }
      ]
    }
  },
  methods: {
    showLinkF (url) {
      console.log('this.showTwitch: ' + this.showTwitch)
      return url !== '/twitch' || this.showTwitch
    }
  },
  computed: {
    showLink: function () {
      return this.showTwitch
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    *list-style: decimal; /* Keep using default numbering for IE6/7 */
    font: 15px 'trebuchet MS', 'lucida sans';
    padding: 0;
    margin-bottom: 4em;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
}

ol ol {
    margin: 0 0 0 2em; /* Add some left margin for inner lists */
}

.rounded-list a{
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: .5em 1em;
    background: #ddd;
    color: #444;
    text-decoration: none;
    border-radius: .3em;
    transition: all .3s ease-out;
    box-sizing: content-box;
}

.rounded-list a:hover{
    background: #baf3b5;
}

.rounded-list a:hover:before{
    /*transform: rotate(360deg);*/
    transform: scale(1.2);
}

.rounded-list a:before{
    content: counter(li);
    counter-increment: li;
    position: absolute; 
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #87ceeb;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: .3em solid #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all .3s ease-out;
    box-sizing: inherit;
}

nav ol li {
  display: inline-block;
  margin: 0 10px;
}
</style>
