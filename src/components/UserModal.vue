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
                  <!-- User-Section -->
                  <user ref="userComp" :userId="userId" :create="create" :modal="true" @hide="hide" />
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
// import { EventBus } from '../event-bus.js'
import $ from 'jquery'
import user from './User.vue'

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
    }
  },
  computed: {
  },
  data () {
    return {
      // isCreate: true,
      // msg: message,
      // user: {
      //   id: null,
      //   username: null,
      //   email: null,
      //   password: null,
      //   account: {
      //     userId: null,
      //     balance: 0
      //   }
      // }
    }
  },
  components: { user },
  methods: {
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
      this.$refs.userComp.clear()
    },
    setData: function (create, userId) {
      this.$refs.userComp.isCreate = create
      this.$refs.userComp.user.id = userId
    }
  },
  mounted () {
    console.log('User Modal Component mounted!')
    // $('#inputEmail').focus()

    // bootstrap modal listener
    $('#userModal').on('hide.bs.modal', e => {
      // console.log('#userModal getting closed')
      // EventBus.$emit('user-hide')
      this.clear()
    })

    // bootstrap modal listener
    $('#userModal').on('shown.bs.modal', e => {
      console.log('#userModal shown >>> ' + this.$refs.userComp.isCreate)
      // EventBus.$emit('user-shown')
      if (this.$refs.userComp.isCreate) {
        this.clear()
        $('#btnSubmit').prop('disabled', false)
      } else {
        this.$refs.userComp.getUser()
      }
      $('#inputEmail').focus()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/test.scss';
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
over-ride "Weak" message, show font in dark grey
*/

/*
Reference:
http://www.bootstrapzen.com/item/135/simple-login-form-logo/
*/
.container {
  min-width: 400px;
}

* {
    -webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
	outline: none;
}

</style>
