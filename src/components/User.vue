<template>
  <div>
    
    <!--
    <modal name="login">
      <h1>{{ msg }}</h1>
    </modal>
    -->

    <!-- Modal -->
    <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              
              <div class="row" id="pwd-container">
                
                <div class="col-md-12">
                  <section class="login-form">
                    <form v-on:submit.prevent="onSubmit" class="form-signin" method="post" action="#" role="login" novalidate>
                    <button type="button" class="close" aria-label="Close" v-on:click="hide()">
                      <span aria-hidden="true">&times;</span>
                    </button>
                      <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" />
                      
                      <div class="form-label-group">
                        <input type="email" v-model="inputEmail" id="inputEmail" v-on:blur="validate('inputEmail', true, true)" :class="'form-control ' + (inputEmailError ? 'red' : '')" placeholder="Email address" required autofocus>
                        <label for="inputEmail">Email address</label>
                        
                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputEmailErrorText" class='form-error alert alert-danger' v-text="inputEmailErrorText"></div>
                        </transition>
                      </div>

                      <div class="form-label-group">
                        <input type="text" v-model="inputUsername" id="inputUsername" v-on:blur="validate('inputUsername', true, true)" :class="'form-control ' + (inputUsernameError ? 'red' : '')" placeholder="Email address" required autofocus>
                        <label for="inputUsername">Username</label>
                        
                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputUsernameErrorText" class='form-error alert alert-danger' v-text="inputUsernameErrorText"></div>
                        </transition>
                      </div>
                      
                      <div class="form-label-group">
                        <input type="password" v-model="inputPassword" id="inputPassword" v-on:blur="validate('inputPassword', true, true)" :class="'form-control ' + (inputPasswordError ? 'red' : '')" placeholder="Password" required>
                        <label for="inputPassword">Password</label>

                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputPasswordErrorText" class='form-error alert alert-danger' v-text="inputPasswordErrorText"></div>
                        </transition>
                      </div>
                      
                      <div class="form-label-group">
                        <input type="password" v-model="inputPasswordConfirm" id="inputPasswordConfirm" v-on:blur="validate('inputPasswordConfirm', true, true)" :class="'form-control ' + (inputPasswordConfirmError ? 'red' : '')" placeholder="Password" required>
                        <label for="inputPasswordConfirm">Confirm Password</label>

                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputPasswordConfirmErrorText" class='form-error alert alert-danger' v-text="inputPasswordConfirmErrorText"></div>
                        </transition>
                      </div>

                      <div class="form-label-group">
                        <input type="number" v-model="inputBalance" id="inputBalance" v-on:blur="validate('inputBalance', true, false)" :class="'form-control ' + (inputBalanceError ? 'red' : '')" placeholder="Email address" required autofocus>
                        <label for="inputBalance">Balance</label>
                        
                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="liveValidation && inputBalanceErrorText" class='form-error alert alert-danger' v-text="inputBalanceErrorText"></div>
                        </transition>
                      </div>
                      
                      <div class="pwstrength_viewport_progress"></div>                      
                      
                      <!--
                      <button v-on:submit.prevent="onSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                      <button v-on:click="onSubmit" type="button" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
                      -->
                      <button v-on:submit.prevent="onSubmit" id="btnSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block" v-text="buttonDescription()" />
                      
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
  props: {
    userId: {
      type: Number,
      required: true,
      default: 0
    },
    create: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  computed: {
  },
  data () {
    return {
      isCreate: true,
      msg: message,
      liveValidation: true,
      defaultErrorText: 'Bitte geben Sie Daten ein',
      user: {
        id: null,
        username: null,
        email: null,
        password: null,
        account: {
          userId: null,
          balance: 0
        }
      },
      inputUsername: '',
      inputUsernameError: false,
      inputUsernameErrorText: this.defaultErrorText,
      inputEmail: '',
      inputEmailError: false,
      inputEmailErrorText: this.defaultErrorText,
      inputPassword: '',
      inputPasswordError: false,
      inputPasswordErrorText: this.defaultErrorText,
      inputPasswordConfirm: '',
      inputPasswordConfirmError: false,
      inputPasswordConfirmErrorText: this.defaultErrorText,
      inputBalance: 0,
      inputBalanceError: false,
      inputBalanceErrorText: this.defaultErrorText,
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
    // a computed getter
    buttonDescription: function () {
      // `this` points to the vm instance
      return this.isCreate ? 'Create User' : 'Save User'
    },
    saveUser: function () {
      this.user.email = this.inputEmail
      this.user.username = this.inputUsername
      this.user.password = this.inputPassword
      this.user.account.balance = this.inputBalance

      let token = jscookie.get('jwt')
      let api = this.isCreate ? 'create' : 'save'
      axios.post(api, this.user, {
        headers: {
          Authorization: 'Bearer ' + token
          // 'test': 'test-1'
        }
      }).then(resp => {
        console.log('resp.data: ' + resp.data)
        this.user = resp.data
        this.create = false
        this.isCreate = false
        EventBus.$emit('global-error', { msg: 'Speichern erfolgreich', type: 'success', sticky: false })
      }).catch(e => {
        // this.errors.push(e)
        console.log('error: ' + e)

        // this.inputEmailError = true
        // this.inputEmailErrorText = 'Bitte überüfen Sie Ihre Eingabe'
        // this.inputPasswordError = true
        // this.inputPasswordErrorText = 'Eingabe unkorrekt'
        EventBus.$emit('global-error', { msg: 'Speichern fehlgeschlagen', type: 'error', sticky: true })

        $('#inputEmail').focus()
      })
      return false
    },
    onSubmit: function () {
      console.log('form submitted')
      let inputs = ['inputEmail', 'inputUsername', 'inputPassword', 'inputPasswordConfirm', 'inputBalance']

      let errInput = null
      inputs.forEach(input => {
        var error = this.validate(input, false, true)
        if (error && !errInput) {
          errInput = input
        }
      })

      if (errInput) {
        // console.log('>>>>> errInput: ' + errInput)
        $('#' + errInput).focus()
      } else {
        // focus aus den inputs nehmen, sonst gibt es unschöne onblur-Effekte
        $('#btnSubmit').focus()
        this.saveUser()
      }
      // this.validate('inputEmail')
      // this.validate('inputPassword')
      // this.liveValidation = false
    },
    getUser: function () {
      $('#btnSubmit').prop('disabled', true)
      let token = jscookie.get('jwt')
      console.log('jwt cookie: ' + token)
      axios.get('get/' + this.user.id, {
        headers: {
          Authorization: 'Bearer ' + token
          // 'test': 'test-1'
        }
      }).then(resp => {
        this.user = resp.data

        this.inputEmail = this.user.email
        this.inputUsername = this.user.username
        this.inputPassword = this.user.password
        this.inputPasswordConfirm = this.user.password
        this.inputBalance = this.user.account.balance

        $('#btnSubmit').prop('disabled', false)
      }).catch(e => {
        $('#btnSubmit').prop('disabled', true)
        var msg = e.message
        if (e.response.status === 401) {
          this.hide()
          EventBus.$emit('sending-login-event', 'show modal login dialog')
          msg = 'Login erforderlich'
        } else {
          EventBus.$emit('global-error', { msg: msg, type: 'error', sticky: true })
        }
      })
    },
    isError: function (input) {
      let err = this.errors.get(input)
      // console.log('isError: ' + input + ' ----- ' + (err && err.error))
      return err && err.error
    },
    validate: function (input, onblur, required) {
      if (onblur) return
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
      let error = this.liveValidation && required && this.$data[input] === ''
      let errorText = error ? this.defaultErrorText : ''

      if (!error) {
        if (input === 'inputPassword') {
          if (this.$data[input].length < 3) {
            error = true
            errorText = 'Das Passwort muss mind. 3 Zeichen lang sein'
          } else if (this.inputPassword !== this.inputPasswordConfirm) {
            error = true
            errorText = 'Die Passwörter stimmen nicht überein'
          }
        } else if (input === 'inputUsername') {
          if (this.$data[input].length < 4) {
            error = true
            errorText = 'Der Username muss mind. 4 Zeichen lang sein'
          }
        } else if (input === 'inputBalance') {
          console.log('balance: ' + this.inputBalance)
          if (!$.isNumeric(this.inputBalance)) {
            error = true
            errorText = 'Balance ist nicht numerisch'
          }
        }
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
    show: function () {
      // this.$modal.show('login')
      // $('#loginModal').modal('show')
      $('#userModal').modal('show')
    },
    hide: function () {
      // this.$modal.hide('login')
      $('#userModal').modal('hide')
    },
    clear: function () {
      for (var key of this.errors.keys()) {
        clearTimeout(this.errors.get(key).timoutThread)
      }
      this.inputEmail = ''
      this.inputUsername = ''
      this.inputPassword = ''
      this.inputPasswordConfirm = ''
      this.inputBalance = 0
      this.inputEmailError = false
      this.inputUsernameError = false
      this.inputPasswordError = false
      this.inputPasswordConfirmError = false
      this.inputBalanceConfirmError = false
      this.inputEmailErrorText = ''
      this.inputUsernameErrorText = ''
      this.inputPasswordErrorText = ''
      this.inputPasswordConfirmErrorText = ''
      this.inputBalanceErrorText = ''

      this.user = {
        id: null,
        username: null,
        email: null,
        password: null,
        account: {
          userId: null,
          balance: 0
        }
      }
      // this.liveValidation = false
      this.errors.clear()
    }
  },
  mounted () {
    console.log('User Component mounted!')
    $('#inputEmail').focus()

    // bootstrap modal listener
    $('#userModal').on('hide.bs.modal', function (e) {
      // console.log('#userModal getting closed')
      EventBus.$emit('user-hide')
    })

    // bootstrap modal listener
    $('#userModal').on('shown.bs.modal', function (e) {
      console.log('#userModal shown')
      EventBus.$emit('user-shown')
    })

    // EventBus.$emit('sending-login-event', 'show modal login dialog')
    EventBus.$on('user-shown', msg => {
      // if (this.create) {
      if (this.isCreate) {
        this.clear()
      } else {
        this.getUser()
      }
      $('#inputEmail').focus()
    })
    EventBus.$on('user-hide', msg => {
      this.clear()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
over-ride "Weak" message, show font in dark grey
*/
.close {
  position: absolute;
  right: 10%;
  top: 10%;
}
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
