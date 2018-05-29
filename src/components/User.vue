<template>
  <div>

    <!--
    <modal name="login">
      <h1>{{ msg }}</h1>
    </modal>
    -->

    <section class="login-form">
      <form v-on:submit.prevent="onSubmit" class="form-signin" method="post" action="#" role="login" novalidate>
        <button v-if="modal" type="button" class="close" aria-label="Close" v-on:click="hide()">
          <span aria-hidden="true">&times;</span>
        </button>
        <span v-if="modal && user.id" class="user-id">ID: <span v-text="user.id" /></span>
        <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" />

        <div class="input-group form-label-group">
            <span class="input-group-prepend">
                <div class="input-group-text bg-white border-right-0">
                  <font-awesome-icon icon="envelope" size="lg" />
                </div>
            </span>

            <input type="email" v-model="inputEmail" id="inputEmail" v-on:blur="validate('inputEmail', true, true)" :class="'form-control border-left-0 rounded-right ' + inputEmailBorderClass" placeholder="Email address" required autofocus>

            <label class="inputicon" for="inputEmail">Email address</label>
            <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
              <div v-if="liveValidation && inputEmailErrorText" class='form-error alert alert-danger' v-text="inputEmailErrorText"></div>
            </transition>
        </div>

        <!-- <div class="form-label-group">
          <input type="email" v-model="inputEmail" id="inputEmail" v-on:blur="validate('inputEmail', true, true)" :class="'form-control ' + (inputEmailError ? 'red' : '')" placeholder="Email address" required autofocus>
          <label for="inputEmail">Email address</label>

          <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
            <div v-if="liveValidation && inputEmailErrorText" class='form-error alert alert-danger' v-text="inputEmailErrorText"></div>
          </transition>
        </div> -->

        <div class="input-group form-label-group">
            <span class="input-group-prepend">
                <div class="input-group-text bg-white border-right-0 rounded-left">
                  <font-awesome-icon icon="user" size="lg" />
                </div>
            </span>
          <input type="text" v-model="inputUsername" id="inputUsername" v-on:blur="validate('inputUsername', true, true)" :class="'form-control border-left-0 rounded-right ' + inputUsernameBorderClass" placeholder="Email address" required autofocus>
          <label class="inputicon" for="inputUsername">Username</label>

          <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
            <div v-if="liveValidation && inputUsernameErrorText" class='form-error alert alert-danger' v-text="inputUsernameErrorText"></div>
          </transition>
        </div>

        <div class="input-group form-label-group">
            <span class="input-group-prepend">
                <div class="input-group-text bg-white border-right-0 rounded-left">
                  <font-awesome-icon icon="unlock" size="lg" />
                </div>
            </span>
          <input type="password" v-model="inputPassword" id="inputPassword" v-on:blur="validate('inputPassword', true, true)" :class="'form-control border-left-0 rounded-right ' + inputPasswordBorderClass" placeholder="Password" required>
          <label class="inputicon" for="inputPassword">Password</label>

          <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
            <div v-if="liveValidation && inputPasswordErrorText" class='form-error alert alert-danger' v-text="inputPasswordErrorText"></div>
          </transition>
        </div>

        <div class="input-group form-label-group">
            <span class="input-group-prepend">
                <div class="input-group-text bg-white border-right-0 rounded-left">
                  <font-awesome-icon icon="unlock-alt" size="lg" />
                </div>
            </span>
          <input type="password" v-model="inputPasswordConfirm" id="inputPasswordConfirm" v-on:blur="validate('inputPasswordConfirm', true, true)" :class="'form-control border-left-0 rounded-right ' + inputPasswordConfirmBorderClass" placeholder="Password" required disabled>
          <label class="inputicon" for="inputPasswordConfirm">Confirm Password</label>

          <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
            <div v-if="liveValidation && inputPasswordConfirmErrorText" class='form-error alert alert-danger' v-text="inputPasswordConfirmErrorText"></div>
          </transition>
        </div>

        <div class="input-group form-label-group">
            <span class="input-group-prepend">
                <div class="input-group-text bg-white border-right-0 rounded-left">
                  <font-awesome-icon icon="money-check-alt" size="lg" />
                </div>
            </span>
          <input type="number" v-model="inputBalance" id="inputBalance" v-on:blur="validate('inputBalance', true, false)" :class="'form-control border-left-0 rounded-right ' + inputBalanceBorderClass" placeholder="Email address" required autofocus>
          <label class="inputicon" for="inputBalance">Balance</label>

          <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
            <div v-if="liveValidation && inputBalanceErrorText" class='form-error alert alert-danger' v-text="inputBalanceErrorText"></div>
          </transition>
        </div>

        <div class="pwstrength_viewport_progress"></div>

        <!--
        <button v-on:submit.prevent="onSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
        <button v-on:click="onSubmit" type="button" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
        -->
        <button v-on:submit.prevent="onSubmit" id="btnSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">
          <font-awesome-icon icon="save" size="lg" />
          <span v-text="buttonDescription()" />
        </button>

      </form>
    </section>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import $ from 'jquery'
import axios from 'axios'
import jscookie from 'js-cookie'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

var message = 'Login'
export default {
  props: {
    userId: {
      type: Number,
      required: false,
      default: 0
    },
    create: {
      type: Boolean,
      required: false,
      default: true
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: { FontAwesomeIcon },
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
      ignoreWatch: false,
      inputUsername: '',
      inputUsernameError: false,
      inputUsernameErrorText: this.defaultErrorText,
      inputUsernameBorderClass: '',
      inputEmail: '',
      inputEmailError: false,
      inputEmailErrorText: this.defaultErrorText,
      inputEmailBorderClass: '',
      inputPassword: '',
      inputPasswordError: false,
      inputPasswordErrorText: this.defaultErrorText,
      inputPasswordBorderClass: '',
      inputPasswordConfirm: '',
      inputPasswordConfirmError: false,
      inputPasswordConfirmErrorText: this.defaultErrorText,
      inputPasswordConfirmBorderClass: '',
      inputBalance: 0,
      inputBalanceError: false,
      inputBalanceErrorText: this.defaultErrorText,
      inputBalanceBorderClass: '',
      error: {
        inputId: '',
        errorText: '',
        timoutThread: null
      },
      errors: new Map()
    }
  },
  watch: {
    inputPassword: function (val, oldVal) {
      if (this.ignoreWatch) return

      let disabled = true
      if (!val || val !== this.inputPasswordConfirm) {
        disabled = false
        if (val !== this.inputPasswordConfirm) {
          this.inputPasswordConfirm = ''
        }
      }

      $('#inputPasswordConfirm').prop('disabled', disabled)
    }
  },
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

        this.setBorderClassAll('')
      }).catch(e => {
        // this.errors.push(e)
        this.$helpers.checkAxiosException(e, () => this.hide(), 'Speichern fehlgeschlagen')
        this.setBorderClassAll('red')
        // EventBus.$emit('global-error', { msg: 'Speichern fehlgeschlagen', type: 'error', sticky: true })

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

        this.ignoreWatch = true

        this.inputEmail = this.user.email
        this.inputUsername = this.user.username
        this.inputPassword = this.user.password
        this.inputPasswordConfirm = this.user.password
        this.inputBalance = this.user.account.balance

        this.ignoreWatch = false

        $('#btnSubmit').prop('disabled', false)
      }).catch(e => {
        $('#btnSubmit').prop('disabled', true)

        this.$helpers.checkAxiosException(e, () => this.hide())
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
        } else if (input === 'inputEmail') {
          // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
          var re = /^[^\s@]+@[^\s@]+\.+(?:[a-z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
          // re = [a-z0-9!#$%&\x39*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&x39*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b
          if (!re.test(String(this.$data[input]).toLowerCase())) {
            error = true
            errorText = 'Bitte geben Sie eine gültige Email Adresse ein'
          }
        } else if (input === 'inputBalance') {
          console.log('balance: ' + this.inputBalance)
          if (!$.isNumeric(this.inputBalance)) {
            error = true
            errorText = 'Balance ist nicht numerisch'
          }
        }
      }

      this.$data[input + 'BorderClass'] = error ? 'red' : 'green'

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
    hide: function () {
      if (this.modal) {
        this.$emit('hide')
      }
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

      this.setBorderClassAll('')

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
    },
    setBorderClassAll: function (borderclass) {
      this.inputUsernameBorderClass = borderclass
      this.inputEmailBorderClass = borderclass
      this.inputPasswordBorderClass = borderclass
      this.inputPasswordConfirmBorderClass = borderclass
      this.inputBalanceBorderClass = borderclass
    }
  },
  mounted () {
    console.log('User Component mounted!')
    $('#inputEmail').focus()

    // $('input').focus(function () {
    //   // console.log('focus input >>> ' + $(this).prev('span div').children().next('div').prop('tagName'))
    //   $(this).prev('span').children().addClass('red border-right-0')
    // })

    // $('input').blur(function () {
    //   // console.log('focus input >>> ' + $(this).prev('span div').children().next('div').prop('tagName'))
    //   $(this).prev('span').children().removeClass('red border-right-0')
    // })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/test.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal-content {
  background-color: unset;
  border: none;
}
</style>
