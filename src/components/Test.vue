<template>
  <div class="hello">
	  <mynav ref="nav" :showTwitch="true"/>
    <div class="holder">

      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" name="skill">
      </form>

        <transition-group name="list" tag="ul">
          <li v-for="(data, index) in skills" :key='data'>
            {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>

        
        <button v-on:click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" :key="item">
            {{ item }}
            </li>
        </transition-group>

      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import mynav from './mynav.vue'

export default {
  name: 'Skills',
  data () {
    return {
      skill: '',
      skills: [
        { skill: 'Vue.js' },
        { skill: 'Frontend Developer' },
        { skill: 'Backend Developer' },
        { skill: 'Middleware Developer' },
        { skill: 'VAC Developer' }
      ],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  components: { mynav },
  methods: {
    addSkill () {
      this.skills.push({skill: this.skill})
      this.skill = ''
    },
    remove (id) {
      this.skills.splice(id, 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
      this.skills = _.shuffle(this.skills)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px) ease;
}

.flip-list-move {
  transition: transform 1s;
}

.list-move {
  transition: transform 1s;
}

  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}
</style>