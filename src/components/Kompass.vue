<template>
  <div>
	  <mynav ref="nav" :showTwitch="true"/>

    <button class="btn btn-lg btn-danger btn-block" v-on:click="moveNeedle(Math.ceil(Math.random() * 360))"><h3>{{ buttonNeedleText }}</h3></button>
    <br />
    
    <!-- Modal -->
    <div class="modal fade" id="settingsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">              
              <div class="row" id="pwd-container">                
                <div class="col-md-12">
                  <!-- Settings -->                  
                  <section class="login-form">
                    <form v-on:submit.prevent="onSubmit" class="form-signin" method="post" action="#" role="login" novalidate>
                      <button type="button" class="close" aria-label="Close" v-on:click="hide()">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <!-- <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" /> -->

                      <h1>Training</h1>
                      <br />
                      <h4 class="text-left">Einstellungen</h4>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <label class="input-group-text border-right-0 w-100" for="inputGroupSelect01">Difficulty</label>
                        </div>
                        <select v-model="selectDiff" class="custom-select" id="inputSelectDiff">
                          <option value="1500">Easy</option>
                          <option value="1000">Hard</option>
                          <option value="500">Difficult</option>
                        </select>
                      </div>

                      <div class="duration input-group form-label-group">
                        <span class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0 w-100">
                              <font-awesome-icon icon="clock" size="lg" />
                            </div>
                        </span>
                        <input type="number" v-model="inputDuration" id="inputDuration" :class="'form-control border-left-0 border-right-0 ' + inputDurationBorderClass" placeholder="Email address" required autofocus>
                        <label class="inputicon" for="inputDuration">Duration</label>

                        <div class="input-group-append">
                          <label class="durationSec input-group-text w-100">s</label>
                        </div>
                        
                        <transition enter-active-class="animated slideInUp" leave-active-class="animated zoomOut">
                          <div v-if="inputDurationErrorText" class='form-error alert alert-danger' v-text="inputDurationErrorText"></div>
                        </transition>
                      </div>

                      <h4 class="text-left">Layout</h4>
                      <!-- <b-form-group>
                        <b-form-radio-group v-model="inputLayout"
                                            :options="optionsLayout"
                                            name="radioInline">
                        </b-form-radio-group>
                      </b-form-group> -->
                      
                      <b-form-group>
                        <b-form-radio-group id="btnradios1"
                                            buttons
                                            button-variant="success"
                                            v-model="inputLayout"
                                            :options="optionsLayout"
                                            name="radiosBtnDefault" />
                      </b-form-group>
                      <br />
                      
                      <button v-on:submit.prevent="onSubmit" id="btnSubmit" type="submit" name="go" class="btn btn-lg btn-primary btn-block">
                        <font-awesome-icon icon="play-circle" size="lg" />
                        Training starten
                      </button>

                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <svg width="40%" height="40%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Created with SVG-edit - https://github.com/SVG-Edit/svgedit-->

      <defs>
          <g id="bg_polygons_NESW">
              <polygon fill="#f2c1c1" stroke="#e5e5e5" points="200,40  200,200  180,180 200,40" id="svg_8"/>
              <polygon fill="white" stroke="#e5e5e5" points="200,40  200,200  220,180 200,40" id="svg_8"/>
          </g>
          <g id="bg_polygons_NESW_sm">
              <polygon fill="#f2d5d5" stroke="#e5e5e5" points="200,80  200,200  180,180 200,80" id="svg_8"/>
              <polygon fill="white" stroke="#e5e5e5" points="200,80  200,200  220,180 200,80" id="svg_8"/>
          </g>

          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:rgb(255,255,255);
        stop-opacity:1"/>
              <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"/>
          </radialGradient>
      </defs>

      <title>Kompass</title>

      <g id="dirLabels">
          <text id="txt_N" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="36" y="36" x="200" stroke-width="0" stroke="#000000" fill="#000000">N</text>
          <text id="txt_S" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="36" y="388" x="200" stroke-width="0" stroke="#000000" fill="#000000">S</text>
          <text id="txt_E" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="36" y="215" x="380" stroke-width="0" stroke="#000000" fill="#000000">E</text>
          <text id="txt_W" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="36" y="215" x="20" stroke-width="0" stroke="#000000" fill="#000000">W</text>

          <text id="txt_NE" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="14" y="110" x="300" stroke-width="0" stroke="#000000" fill="#000000">NE</text>
          <text id="txt_SE" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="14" y="300" x="300" stroke-width="0" stroke="#000000" fill="#000000">SE</text>
          <text id="txt_SW" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="14" y="300" x="100" stroke-width="0" stroke="#000000" fill="#000000">SW</text>
          <text id="txt_NW" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="14" y="110" x="100" stroke-width="0" stroke="#000000" fill="#000000">NW</text>
      </g>


      <g id="bg_polygons" fill-opacity="1" stroke-opacity="1">
          <circle fill="none" stroke-width="2" cx="200" cy="200" r="120" id="svg_2" stroke="#e5e5e5"/>
          <circle fill="none" stroke-width="1" cx="200" cy="200" r="117" id="svg_2" stroke="#e5e5e5"
                  stroke-dasharray="5,5"/>

          <use xlink:href="#bg_polygons_NESW_sm" id="bg_polygons_NE" class="null" transform="rotate(45,200,200)"/>
          <use xlink:href="#bg_polygons_NESW_sm" id="bg_polygons_SE" class="null" transform="rotate(135,200,200)"/>
          <use xlink:href="#bg_polygons_NESW_sm" id="bg_polygons_SW" class="null" transform="rotate(225,200,200)"/>
          <use xlink:href="#bg_polygons_NESW_sm" id="bg_polygons_NW" class="null" transform="rotate(315,200,200)"/>

          <use xlink:href="#bg_polygons_NESW" id="bg_polygons_N" class="null"/>
          <use xlink:href="#bg_polygons_NESW" id="bg_polygons_E" class="null" transform="rotate(90,200,200)"/>
          <use xlink:href="#bg_polygons_NESW" id="bg_polygons_S" class="null" transform="rotate(180,200,200)"/>
          <use xlink:href="#bg_polygons_NESW" id="bg_polygons_W" class="null" transform="rotate(270,200,200)"/>
      </g>

      <g id="needle" transform="rotate(0,200,200)">
      <!--<g id="needle">-->
          <g id="needle-dir">
              <polygon stroke="black" points="200,70  200,200  194,200 194,80 200,70 206,80 206,200 200,200"
                      id="svg_8"/>
              <polygon fill="#00ff00" points="200,70  200,200  194,200 194,80 200,70" id="svg_8"/>
              <polygon fill="#7fff00" points="200,70  200,200  206,200 206,80 200,70" id="svg_8"/>
          </g>
          <g id="needle-nondir" transform="rotate(180,200,200)">
              <polygon stroke="black" points="200,120  200,200  194,200 194,130 200,120 206,130 206,200 200,200"
                      id="svg_8"/>
              <polygon fill="#b2b2b2" points="200,120  200,200  194,200 194,130 200,120" id="svg_8"/>
              <polygon fill="#cccccc" points="200,120  200,200  206,200 206,130 200,120" id="svg_8"/>
          </g>
          <!--<animateTransform id="animateNeedle" type="rotate" dur="0s" from="0 200 200" to="0 200 200" repeatCount="1" fill="freeze" attributeName="transform" attributeType="xml"/>-->
      </g>

      <g id="needle_center">
          <circle fill="url(#grad1)" stroke="#000000" stroke-width="2" cx="200" cy="200" r="10" id="svg_9"/>
          <circle fill="none" stroke-width="5" cx="200" cy="200" r="15" id="svg_2" stroke="#000000"/>
      </g>


      <g id="group_popup" fill-opacity="0.7" stroke-opacity="0.7" visibility="hidden">
          <rect fill="#ffffff" stroke="#000000" stroke-width="0" x="170" y="170" width="60" height="60" id="svg_2"/>
          <text id="txtPopup" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="72" y="226" x="200"
                    stroke-width="1" stroke="#000000" fill="#000000">3</text>
      </g>


      <g id="group_popup_dir" fill-opacity="0.7" stroke-opacity="0.7" visibility="hidden">
          <rect fill="#ffffff" stroke="#000000" stroke-width="0" x="170" y="170" width="60" height="60" id="svg_2"/>
          <text id="txtPopupDir" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="50" y="220" x="200"
                    stroke-width="1" stroke="#000000" fill="#000000"/>
      </g>


      <g id="group_result" fill-opacity="0.7" stroke-opacity="0.7" visibility="hidden">
          <rect fill="#ffffff" stroke="#000000" stroke-width="0" x="10" y="350" width="120" height="40" id="svg_2"/>
          <text id="txtResult" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="24" y="372" x="70"
                    stroke-width="1" stroke="#000000" fill="#000000"/>
              <text id="txtReactionTime" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="10" y="385" x="70"
                    fill="#000000"/>
      </g>

      <g id="group_timer" fill-opacity="0.7" stroke-opacity="0.7" visibility="hidden">
          <rect fill="#ffffff" stroke="#000000" stroke-width="0" x="10" y="20" width="120" height="40" id="svg_2"/>
          <text id="txtTimer" xml:space="preserve" text-anchor="middle" font-family="Comic Sans MS" font-size="24" y="45" x="70"
                    stroke-width="1" stroke="#000000" fill="#000000"/>
      </g>
      <!--
      <line fill="none" stroke="#bf5f00" stroke-width="2" x1="66" y1="200" x2="168" y2="200" id="svg_5" stroke-dasharray="5,5" stroke-linecap="round"/>
      <line fill="none" stroke="#bf5f00" stroke-width="2" x1="241" y1="200" x2="343" y2="200" stroke-dasharray="5,5" stroke-linecap="round" id="svg_4"/>
      <line fill="none" stroke="#bf5f00" stroke-width="2" x1="200" y1="55.5" x2="200" y2="157.5" stroke-dasharray="5,5" stroke-linecap="round" id="svg_6"/>
      <line fill="none" stroke="#bf5f00" stroke-width="2" x1="200" y1="238.5" x2="200" y2="340.5" stroke-dasharray="5,5" stroke-linecap="round" id="svg_7"/>
      -->
  </svg>
  </div>
    
</template>

<script>
import mynav from './mynav.vue'
import { EventBus } from '../event-bus.js'
import helper from '../helpers.js'
import $ from 'jquery'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

var message = 'Kompass'
export default {
  data () {
    return {
      sharedItems: mynav.data,
      msg: message,
      ignoreWatch: false,
      trainingStarted: false,
      reactInTime: false,
      newPopup: false,
      startCounterFrom: 3,
      buttonNeedleText: 'Kompass ausrichten',
      animationStopFlag: 0,
      trainingStopFlag: 0,
      defaultErrorText: 'Bitte geben Sie Daten ein',
      selectDiff: 1500,
      inputDuration: 10,
      inputDurationError: false,
      inputDurationErrorText: this.defaultErrorText,
      inputDurationBorderClass: '',
      inputLayout: 'ns',
      optionsLayout: [
        { text: 'Nord Süd', value: 'ns' },
        { text: 'Links Rechts', value: 'lr' },
        { text: 'gemischt', value: 'mixed' }
      ],
      ns: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      lr: ['Oben', 'RO', 'R', 'RU', 'Unten', 'LU', 'L', 'LO'],
      directions: []
    }
  },
  components: { mynav, FontAwesomeIcon },
  watch: {
    inputLayout: function (val, oldVal) {
      if (this.ignoreWatch) return

      this.directions = val === 'lr' ? this.lr : this.ns
      this.showDirectionLabels()
    }
  },
  methods: {
    onSubmit: function () {
      console.log('form submitted')
      this.startCounter().then(x => this.startTraining())
    },
    startCounter: function () {
      this.hide()
      console.log('settings >>> diff: ' + this.selectDiff + ' - duration: ' + this.inputDuration + ' - Layout: ' + this.inputLayout)
      this.trainingStarted = true

      var show = function (number, sleep = 700) {
        return new Promise(resolve => {
          setTimeout(() => {
            this.setPopupCounter(number)
            resolve(number)
          }, sleep)
        })
      }.bind(this)

      var hide = function (number, sleep = 500) {
        return new Promise(resolve => {
          setTimeout(() => {
            this.hidePopupCounter()
            resolve(number - 1)
          }, sleep)
        })
      }.bind(this)

      var promise = null
      var counterArray = [...Array(this.startCounterFrom).keys()].map(n => n + 1).reverse()
      counterArray.forEach((number, index) => {
        // console.log('index : ' + index + ' - number : ' + number)
        if (index === 0) promise = show(number).then(hide)
        else promise = promise.then(x => show(number)).then(hide)
      })

      // nach Countdown Training starten
      return promise

      // manueller Countdown als Beispiel
      // show(3, 500).then(hide).then(show).then(hide).then(show).then(hide).then(x => this.startTraining())
    },
    startTraining: function () {
      console.log('start Training!')
      this.hideDirectionLabels()
      this.startTrainingTimer()

      // nächstes Richtungs-Popup anzeigen
      var nextPopUp = function () {
        return new Promise((resolve, reject) => {
          console.log('nextPopUp promise')

          let nextPopupIn = Math.floor(Math.random() * 2000) + 2000
          console.log('nextPopupIn: ' + nextPopupIn)

          setTimeout(() => {
            if (this.trainingStopFlag) {
              reject(new Error('trainingStopFlag'))
              return
            }
            this.hideDirectionLabels()

            let popupIdx = Math.floor(Math.random() * this.directions.length)
            console.log('popup: ' + this.directions[popupIdx])

            this.setPopupDir(this.directions[popupIdx])
            this.reactInTime = true
            this.newPopup = true

            setTimeout(() => {
              this.reactInTime = false
              this.hidePopupDir()
              resolve('x')
            }, this.selectDiff) // TODO depends on difficulty choice!
          }, nextPopupIn)
        })
      }.bind(this)

      // Promise-Chain mit aufeinander folgenden Popups aufbauen -> bei Exception ist die Trainingszeit abgelaufen
      var array = [...Array(Math.floor(this.inputDuration / 2) + 5).keys()] // Länge des Arrays abhängig vom gewählten Zeitfenster machen
      console.log('array.length: ' + array.length)
      var promise = nextPopUp()
      array.forEach((number, index) => {
        // console.log('index : ' + index + ' - number : ' + number)
        promise = promise.then(x => nextPopUp())
        if (index === array.length - 1) {
          // ist die Zeit vorüber, wird eine Exception geschmissen => hier dann weiter machen
          promise = promise.catch(e => {
            console.log(e.message)

            this.showDirectionLabels()
          })
        }
      })
    },
    startTrainingTimer: function () {
      let duration = this.inputDuration
      var interval = setInterval(() => {
        if (this.trainingStopFlag || duration <= 0) {
          clearInterval(interval)
          this.trainingStarted = false
          this.trainingStopFlag = true
        }

        this.showTimer(duration + 's', 'black')
        duration -= 1
      }, 1000)
    },
    delay: function (t, v) {
      return new Promise(resolve => setTimeout(resolve.bind(null, v), t))
    },
    sleeper: function (t) {
      return function (v) {
        return new Promise(resolve => setTimeout(() => resolve(v), t))
      }
    },
    showTimer: function (text, color) {
      this.setTimer(text, color, false)
    },
    hideTimer: function () {
      this.setTimer('', 'black', true)
    },
    setTimer: function (text, color, hide) {
      this.showHideSvgObject('group_timer', hide)
      this.setTextSvg('txtTimer', text)
      this.setAttrSvgObject('txtTimer', 'fill', color)
    },
    showDirectionLabels: function () {
      this.showHideDirectionLabels(false)
    },
    hideDirectionLabels: function () {
      this.showHideDirectionLabels(true)
    },
    showHideDirectionLabels: function (hide) {
      this.ns.forEach((dir, index) => {
        // console.log('>>> ' + dir)
        this.setAttrSvgObject('txt_' + dir, 'visibility', hide ? 'hidden' : 'visible')
        this.setAttrSvgObject('txt_' + dir, 'fill', 'black')
        this.setTextSvg('txt_' + dir, this.directions[index])
      })
    },
    setPopupCounter: function (text) {
      console.log('setPopupCounter')
      this.setPopup(text, false, false)
    },
    hidePopupCounter: function () {
      console.log('hidePopupCounter')
      this.setPopup('', false, true)
    },
    setPopupDir: function (text) {
      this.setPopup(text, true, false)
    },
    hidePopupDir: function () {
      this.setPopup('', true, true)
    },
    setPopup: function (text, dir, hide) {
      this.showHideSvgObject(dir ? 'group_popup_dir' : 'group_popup', hide)
      this.setTextSvg(dir ? 'txtPopupDir' : 'txtPopup', text)
    },
    showResultText: function (text, reactionTime, color) {
      this.setResultText(text, reactionTime, color, false)
    },
    hideResultText: function () {
      this.setResultText('', '', 'black', true)
    },
    setResultText: function (text, reactionTime, color, hide) {
      this.showHideSvgObject('group_result', hide)
      this.setTextSvg('txtResult', text)
      this.setTextSvg('txtReactionTime', reactionTime)
      this.setAttrSvgObject('txtResult', 'fill', color)
      this.setAttrSvgObject('txtReactionTime', 'fill', color)
    },
    showHideSvgObject: function (id, hide) {
      this.setAttrSvgObject(id, 'visibility', hide ? 'hidden' : 'visible')
    },
    setAttrSvgObject: function (id, attr, value) {
      $('#' + id).attr(attr, value)
    },
    setTextSvg: function (id, text) {
      $('#' + id).text(text)
    },
    showResult: function (reactionTime, color, text, fadeOut) {
      // richtige Richtung (N, NW...) anzeigen, Korrektheit farblich abgestimmt
      // this.showHideReactionDirLabel('txt_' + directionLists.valueNS(popupIdx), color, false, popupIdx);
      this.showResultText(text, reactionTime, color)

      if (fadeOut) {
        setTimeout(() => {
          if (this.trainingStarted) {
            // this.showHideReactionDirLabel('txt_' + directionLists.valueNS(popupIdx), 'black', true, popupIdx);
            this.hideResultText()
          }
        }, 1000)
      }
    },
    // access child data!
    moveNeedle (toAngle) {
      // console.log(document.getElementById('needle'))
      // document.getElementById('needle').setAttribute('transform', 'rotate(' + (Math.random() * 360) + ',200,200)')

      var speed = 300
      var transform = document.getElementById('needle').getAttribute('transform')
      var from = transform.slice(transform.indexOf('(') + 1, transform.indexOf(','))
      var to = toAngle
      if (Math.abs(to - from) > 180) {
        if (from > to) {
          from = from - 360
        } else {
          to = to - 360
        }
      }

      var distance = Math.abs(from - to)
      var sleepPerDegree = Math.ceil(distance !== 0 ? speed / distance : 50)

      var distanceRange = helper.getCustomListRange(from, to)

      // console.log('from: ' + from + ' - to: ' + to)
      console.log('distanceRange >>> from: ' + distanceRange[0] + ' - to: ' + distanceRange[distanceRange.length - 1])
      console.log('distance: ' + distance)
      console.log('sleepPerDegree: ' + sleepPerDegree)

      let counter = 0

      function* pos () {
        while (counter < distanceRange.length - 1) {
          yield distanceRange[counter++]
        }

        clearInterval(interval)
        console.log('toAngle: ' + toAngle)
        yield toAngle
        // document.getElementById('needle').setAttribute('transform', 'rotate(' + toAngle + ',200,200)')
      }

      let posGen = pos()
      let hash = ++this.animationStopFlag
      console.log('animationStopFlag >>> ' + this.animationStopFlag)

      var interval = setInterval(() => {
        // check stop flag
        if (hash !== this.animationStopFlag) clearInterval(interval)
        // console.log('position: ' + position)
        let nextPos = posGen.next().value
        // console.log('nextPos: ' + nextPos)
        if (nextPos === undefined) {
          clearInterval(interval)
          this.setAttrSvgObject('needle', 'transform', 'rotate(' + toAngle + ',200,200)')
        } else {
          this.setAttrSvgObject('needle', 'transform', 'rotate(' + nextPos + ',200,200)')
          this.setAttrSvgObject('needle', 'angle', String.valueOf(nextPos))
        }
      }, sleepPerDegree)

      /*
      for (var position in distanceRange) {
        if (counter++ > distance) sleepPerDegree = 50 // 'Ausschwingen' hat festen 'speed' (sieht damit immer gleich aus)
        try {
            console.log('position: ' + position)
            document.getElementById('needle').setAttribute('transform', 'rotate(' + position + ',200,200)')
            document.getElementById('needle').setAttribute('angle', String.valueOf(position))
        } catch (e) {
          console.log(e)
        }
      }
      */
    },
    show: function () {
      // this.$modal.show('login')
      // $('#loginModal').modal('show')
      $('#settingsModal').modal('show')
    },
    hide: function () {
      // this.$modal.hide('login')
      $('#settingsModal').modal('hide')
    }
  },
  mounted () {
    this.show()
    this.directions = this.ns

    // Listen to the event.
    EventBus.$on('kompass-key-event', keyName => {
      var directionKeys = ['8', '9', '6', '3', '2', '1', '4', '7']
      var toAngle = directionKeys.indexOf(keyName) * 45
      console.log('toAngle: ' + toAngle)
      if (!this.trainingStarted) {
        this.moveNeedle(toAngle)
      }

      if (this.trainingStarted) {
        if (this.reactInTime) {
          this.moveNeedle(toAngle)
          // auswerten ob richtig reagiert
          this.reactInTime = false // nur eine Eingabe erlaubt nach Popup
          this.newPopup = false
        } else if (this.newPopup) {
          // zu langsam...
          this.newPopup = false
          this.showResult('', 'red', 'too slow!', true)
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/form.css">
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form[role=login] {
  height: 520px;
}

.form-control {
  width: 80px;
  flex: none;
  text-align: right;
}

div.duration {
  left: 57%;
}

.durationSec {
  padding: 15px 10px 0px 10px;
}

#btnSubmit {
  position: absolute;
  bottom: 10px;
  width: 80%;
}
</style>
