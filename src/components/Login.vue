<template>
  <div>
    
    <!--
    <modal name="login">
      <h1>{{ msg }}</h1>
    </modal>
    -->

    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              
              <div class="row" id="pwd-container">
                
                <div class="col-md-12">
                  <section class="login-form">
                    <form v-on:submit.prevent="onSubmit" class="form-signin" method="post" action="#" role="login" novalidate>
                      <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" />
                      
                      <div class="form-label-group">
                        <input type="email" v-model="inputLoginEmail" id="inputLoginEmail" v-on:blur="validate('inputLoginEmail', true)" :class="'form-control ' + (inputLoginEmailError ? 'red' : '')" placeholder="Email address" required autofocus>
                        <label for="inputLoginEmail">Email address</label>
                        
                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <!--
                          <div v-if="isError('inputLoginEmail')" class='form-error alert alert-danger' v-text="emailErrorText"></div>
                          -->
                          <div v-if="liveValidation && inputLoginEmailErrorText" class='form-error alert alert-danger' v-text="inputLoginEmailErrorText"></div>
                        </transition>
                      </div>
                      
                      <div class="form-label-group">
                        <input type="password" v-model="inputLoginPassword" id="inputLoginPassword" v-on:blur="validate('inputLoginPassword', true)" :class="'form-control ' + (inputLoginPasswordError ? 'red' : '')" placeholder="Password" required>
                        <label for="inputLoginPassword">Password</label>

                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputLoginPasswordErrorText" class='form-error alert alert-danger' v-text="inputLoginPasswordErrorText"></div>
                        </transition>
                      </div>
                      
                      <div class="pwstrength_viewport_progress"></div>                      
                      
                      <!--
                      <button v-on:submit.prevent="onSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                      <button v-on:click="onSubmit" type="button" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                      -->
                      <button v-on:submit.prevent="onSubmit" id="btnLoginSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                      <div>
                        <a href="#">Create account</a> or <a href="#">reset password</a>
                      </div>
                      
                    </form>
                    
                    <div class="form-links">
                      <a href="#">www.website.com</a>
                    </div>
                  </section>  
                </div>
                     

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import $ from 'jquery'
import axios from 'axios'
import jscookie from 'js-cookie'

var message = 'Login'
export default {
  data () {
    return {
      msg: message,
      liveValidation: true,
      defaultErrorText: 'Bitte geben Sie Daten ein',
      user: {
        id: null,
        username: null,
        email: null,
        password: null,
        account: {
          balance: 0
        }
      },
      inputLoginEmail: '',
      inputLoginEmailError: false,
      inputLoginEmailErrorText: this.defaultErrorText,
      inputLoginPassword: '',
      inputLoginPasswordError: false,
      inputLoginPasswordErrorText: this.defaultErrorText,
      error: {
        inputId: '',
        errorText: '',
        timoutThread: null
      },
      errors: new Map()
    }
  },
  components: { },
  methods: {
    login: function () {
      this.user.username = this.inputLoginEmail
      this.user.password = this.inputLoginPassword
      axios.post('authUser', this.user).then(resp => {
        var token = resp.data['token']
        this.user = resp.data['user']
        console.log('token >>> ' + token)
        console.log('login user >>> ' + this.user)
        jscookie.set('jwt', token)
        // parent Bescheid geben
        this.$emit('onLogin')
      }).catch(e => {
        // this.errors.push(e)
        console.log('error: ' + e)

        this.inputLoginEmailError = true
        this.inputLoginEmailErrorText = 'Bitte überüfen Sie Ihre Eingabe'
        this.inputLoginPasswordError = true
        // this.inputLoginPasswordErrorText = 'Eingabe unkorrekt'
        EventBus.$emit('global-error', { msg: 'Login fehlgeschlagen', type: 'error', sticky: false })

        $('#inputLoginEmail').focus()
      })
      return false
    },
    onSubmit: function () {
      console.log('form submitted')
      let inputs = ['inputLoginEmail', 'inputLoginPassword']

      let errInput = null
      inputs.forEach(input => {
        var error = this.validate(input)
        if (error && !errInput) {
          errInput = input
        }
      })

      if (errInput) {
        // console.log('>>>>> errInput: ' + errInput)
        $('#' + errInput).focus()
      } else {
        // focus aus den inputs nehmen, sonst gibt es unschöne onblur-Effekte
        $('#btnLoginSubmit').focus()
        this.login()
      }
      // this.validate('inputLoginEmail')
      // this.validate('inputLoginPassword')
      // this.liveValidation = false
    },
    isError: function (input) {
      let err = this.errors.get(input)
      // console.log('isError: ' + input + ' ----- ' + (err && err.error))
      return err && err.error
    },
    validate: function (input, onblur) {
      // console.log('this.$data[' + input + 'Error]: ' + this.$data[input + 'Error'])
      // bei onblur nur validieren, wenn feld als fehlerhaft gekennzeichnet
      if (onblur && !this.$data[input + 'Error']) return

      let err = this.errors.get(input)

      let delayTime = 0

      // an-/bestehende Animationen canceln
      if (err) {
        clearTimeout(err.timoutThread)
        this.$data[input + 'Error'] = false
        this.$data[input + 'ErrorText'] = ''
        delayTime = 0
        err.error = false
      }

      // Validations...
      let error = this.liveValidation && this.$data[input] === ''
      let errorText = error ? this.defaultErrorText : ''

      if (!error && input === 'inputLoginPassword' && this.$data[input].length < 3) {
        error = true
        errorText = 'Das Passwort muss mind. 3 Zeichen lang sein'
      }

      // falls bereits ein Fehlertext angezeigt wird, mit Parallel-Verarbeitung (->setTimeout) Animations-Überschneidungen abfedern
      setTimeout(() => {
        this.$data[input + 'Error'] = error
        this.$data[input + 'ErrorText'] = errorText

        // falls error, diesen nach 5 sekunden wieder animiert ausblenden
        if (this.liveValidation && this.$data[input + 'Error']) {
          var t = setTimeout(() => {
            // this.$data[input + 'Error'] = false
            this.$data[input + 'ErrorText'] = '' // this.defaultErrorText
          }, 5000)
          this.errors.set(input, { inputId: input, error: this.$data[input + 'Error'], timoutThread: t })
        }
      }, delayTime)

      return error
    },
    delay: function (t, v) {
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t)
      })
    },
    clear: function () {
      for (var key of this.errors.keys()) {
        clearTimeout(this.errors.get(key).timoutThread)
      }
      this.inputLoginEmail = ''
      this.inputLoginPassword = ''
      this.inputLoginEmailError = false
      this.inputLoginPasswordError = false
      this.inputLoginEmailErrorText = ''
      this.inputLoginPasswordErrorText = ''
      // this.liveValidation = false

      this.user = {
        id: null,
        username: null,
        email: null,
        password: null,
        account: {
          balance: 0
        }
      }
      this.errors.clear()
    }
  },
  mounted () {
    // EventBus.$emit('sending-login-event', 'show modal login dialog')
    EventBus.$on('login-shown', msg => {
      this.clear()
      $('#inputLoginEmail').focus()
      // this.$refs.login.liveValidation = false
      setTimeout(() => {
        this.liveValidation = true
      }, 1000)
    })
    EventBus.$on('login-hide', msg => {
      // this.$refs.login.liveValidation = false
      // this.close()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
over-ride "Weak" message, show font in dark grey
*/

.progress-bar {
    color: #333;
} 

/*
Reference:
http://www.bootstrapzen.com/item/135/simple-login-form-logo/
*/
.modal-content {
  background-color: unset;
  border: none;
}

.container {
  min-width: 400px;
}

* {
    -webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
	outline: none;
}

.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
}

.login-form {
	margin-top: 60px;
}

form[role=login] {
	color: #5d5d5d;
	background: #f2f2f2;
	padding: 26px;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}
form[role=login] img {
  display: block;
  margin: 0 auto;
  margin-bottom: 35px;
}
form[role=login] input,
form[role=login] button {
  /*font-size: 18px;*/
  margin: 16px 0;
}
form[role=login] > div {
  text-align: left;
}
	
.form-links {
	text-align: center;
	margin-top: 1em;
	margin-bottom: 50px;
}
.form-links a {
  color: #fff;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
  color: #777;
}

.red {
  border-color: #FF0000;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
.form-error {
  position: absolute;
  top: 45px;
  left: -10px;
  display: block;
  padding: 0 0;
  z-index: 1;
  border-style: dotted;
}
.form-error:before {  
  content: ' ';  
  position: absolute;  
  width: 0;  
  height: 0;  
  left: 30px;  
  top: -10px;  
  border: 5px solid;  
  border-color: transparent #f5c6cb #f5c6cb transparent;  
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

</style>
