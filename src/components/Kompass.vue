<template>
  <div>
	  <mynav ref="nav" :showTwitch="true"/>
    <div class="container">
      <div class="row">
        <div class="col-9 svgpos border-0">
          <svg width="80%" height="80%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
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
        <div class="col-sm-3">
          <button v-text="buttonNeedleText" class="btn btn-lg btn-danger btn-block buttons" :disabled="trainingStarted" v-on:click="moveNeedle(Math.ceil(Math.random() * 360))" />
          <button v-if="trainingStarted" class="btn btn-lg btn-danger btn-block buttons" v-on:click="stopTraining()">Stop Training</button>
          <button v-else class="btn btn-lg btn-danger btn-block buttons" v-on:click="show()">Settings</button>
          <button v-if="showStats" class="btn btn-lg btn-danger btn-block buttons" v-on:click="showStatistics()">Statistiken</button>
          <!-- <button class="btn btn-lg btn-danger btn-block buttons" v-on:click="getPopupDirection(getRandomPopupIdx())">TEST</button> -->
        </div>
      </div>
    </div>

        <!-- Modal Settings -->
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
                            <b-form-select v-model="selectDiff" :options="optionsDiff" class="form-control-lg custom-select" />
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
                            <h4 class="d-inline">Training starten</h4>
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

        <!-- Modal Stats -->
        <div class="modal fade" id="statsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-dialog-centered modal-dialog-stat" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row" id="pwd-container">
                    <div class="col-md-12 statSection">
                      <button type="button" class="close closeStat" aria-label="Close" v-on:click="hideStatistics()">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <!-- Settings -->
                      <h1>Statistiken</h1>
                      <br />
                      <div class="row">
                        <div class="col text-right">Difficulty: </div>
                        <div class="col text-left" v-text="selectDiff.text"></div>
                        <div class="col text-right">Duration: </div>
                        <div class="col text-left" v-text="inputDuration + 's'"></div>
                      </div>
                      <br />
                      <div class="table-responsive">
                        <table data-toggle="table" class="table table-hover table-sm">
                          <thead>
                            <tr>
                              <th scope="col" :class="header[2].align">
                                <span class="header">#</span>
                              </th>
                              <th scope="col" :class="h.align" v-for="(h, index) in header" v-bind:key="h.data" @click="sort(index)">
                                <span class="header" v-text="h.desc" />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(stat, index) of stats" v-bind:key="index">
                              <td :class="header[2].align" :data-title="header[2].desc">
                                <span v-text="index + 1"></span>
                              </td>
                              <td :class="header[0].align" :data-title="header[0].desc">
                                <span v-text="stat.popup"></span>
                              </td>
                              <td :class="header[1].align" :data-title="header[1].desc">
                                <span v-text="stat.userInput"></span>
                              </td>
                              <td :class="header[2].align" :data-title="header[2].desc">
                                <font-awesome-icon v-if="stat.result === 1" icon="check" size="lg" />
                              </td>
                              <td :class="header[3].align" :data-title="header[3].desc">
                                <font-awesome-icon v-if="stat.result === 2 || stat.result === 4" icon="check" size="lg" />
                              </td>
                              <td :class="header[4].align" :data-title="header[4].desc">
                                <font-awesome-icon v-if="stat.result === 3 || stat.result === 4" icon="check" size="lg" />
                              </td>
                              <td :class="header[5].align" :data-title="header[5].desc">
                                <span v-text="stat.reactionTime + ' ms'"></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
      popupIdx: -1,
      popupTime: 0,
      startCounterFrom: 3,
      buttonNeedleText: 'Kompass ausrichten',
      animationStopFlag: 0,
      trainingStopFlag: 0,
      defaultErrorText: 'Bitte geben Sie Daten ein',
      selectDiff: { time: 1500, text: 'Easy' },
      optionsDiff: [
        { text: 'Easy', value: { time: 1500, text: 'Easy' } },
        { text: 'Hard', value: { time: 1000, text: 'Hard' } },
        { text: 'Difficult', value: { time: 500, text: 'Difficult' } }
      ],
      inputDuration: 30,
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
      directions: [],
      stats: [],
      showStats: true,
      header: [
        {desc: 'Vorgabe', colsize: 2, align: 'text-middle'},
        {desc: 'Input', colsize: 2, align: 'text-middle'},
        {desc: 'korrekt', colsize: 1, align: 'text-middle'},
        {desc: 'falsch', colsize: 1, align: 'text-middle'},
        {desc: 'zu spät', colsize: 1, align: 'text-middle'},
        {desc: 'Reaktionszeit', colsize: 5, align: 'text-right'}]
    }
  },
  components: { mynav, FontAwesomeIcon },
  watch: {
    inputLayout: function (val, oldVal) {
      if (this.ignoreWatch) return

      this.directions = val === 'lr' ? this.lr.slice(0) : this.ns.slice(0) // copy without reference
      this.showDirectionLabels()
    }
  },
  methods: {
    onSubmit: function () {
      console.log('form submitted')
      this.trainingStarted = true
      this.trainingStopFlag = false
      this.moveNeedle(0)

      this.startCounter().then(x => this.startTraining())
      // this.hide()
      // this.startTraining()
    },
    startCounter: function () {
      this.hide()
      console.log('settings >>> diff: ' + this.selectDiff.time + ' - duration: ' + this.inputDuration + ' - Layout: ' + this.inputLayout)

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
      this.hideResultText()
      this.stats = []
      this.showStats = false

      // nächstes Richtungs-Popup anzeigen
      var nextPopUp = function () {
        // falls zu langsam reagiert wird
        setTimeout(() => {
          console.log('this.newPopup ... ' + this.newPopup)
          if (this.newPopup) {
            console.log('too slow reaction ...')
            let reactionTime = -1
            let color = 'red'
            let resultText = 'too slow'
            let reactionResult = 4
            this.showResult('', color, resultText, true)
            this.addStat(this.directions[this.popupIdx], '', resultText, reactionResult, reactionTime) // TODO reactionResult
            this.newPopup = false
          }
        }, 1000)
        // neues Popup Promise
        return new Promise((resolve, reject) => {
          // console.log('nextPopUp promise')
          let nextPopupIn = 2000 // Math.floor(Math.random() * 2000) + 2000
          // console.log('nextPopupIn: ' + nextPopupIn)

          setTimeout(() => {
            // Training ist beendet -> Exception unterbricht Promise-Chain
            if (this.trainingStopFlag) {
              reject(new Error('trainingStopFlag'))
              return
            }
            this.hideDirectionLabels()

            let lastPopupIdx = this.popupIdx
            this.popupIdx = this.getRandomPopupIdx()
            // N-/S-Popups und Duplikate (ausser bei 'mixed') eher niedrig halten
            if ([0, 4].includes(this.popupIdx) || (this.inputLayout !== 'mixed' && this.popupIdx === lastPopupIdx)) {
              this.popupIdx = this.getRandomPopupIdx()
            }

            this.setPopupDir(this.getPopupDirection(this.popupIdx))
            this.reactInTime = true
            this.newPopup = true
            this.popupTime = new Date().getTime()

            setTimeout(() => {
              this.reactInTime = false
              this.hidePopupDir()
              if (this.trainingStopFlag) {
                reject(new Error('trainingStopFlag'))
                return
              }
              resolve('x')
            }, this.selectDiff.time) // TODO depends on difficulty choice!
          }, nextPopupIn)
        })
      }.bind(this)

      // Promise-Chain mit aufeinander folgenden Popups aufbauen -> ist die Trainingszeit abgelaufen, wird eine Exception geworfen
      var array = [...Array(Math.floor(this.inputDuration / 2) + 5).keys()] // Länge des Promise-Arrays abhängig vom gewählten Zeitfenster machen
      console.log('array.length: ' + array.length)
      var promise = nextPopUp()
      array.forEach((number, index) => {
        // console.log('index : ' + index + ' - number : ' + number)
        promise = promise.then(x => nextPopUp())
        if (index === array.length - 1) {
          // ist die Zeit vorüber, wird eine Exception geschmissen => hier dann weiter machen
          promise = promise.catch(e => {
            console.log(e.message)

            this.trainingStarted = false
            this.showDirectionLabels()
            this.hideTimer()
            this.showResult('', 'black', 'hits: ' + this.getCorrects() + ' / ' + this.stats.length, false)
            this.showStats = true
          })
        }
      })
    },
    startTrainingTimer: function () {
      let duration = this.inputDuration
      var interval = setInterval(() => {
        if (this.trainingStopFlag || duration <= 0) {
          // this.trainingStarted = false
          this.trainingStopFlag = true
          clearInterval(interval)
          return
        }

        this.showTimer(duration + 's', 'black')
        duration -= 1
      }, 1000)
    },
    stopTraining: function () {
      console.log('>>> stopTraining')
      this.trainingStopFlag = true
    },
    getRandomPopupIdx: function () {
      let idx = Math.floor(Math.random() * this.directions.length)
      return idx
    },
    getPopupDirection: function (idx) {
      console.log('idx: ' + idx)
      if (this.inputLayout === 'mixed') {
        let tmp = [this.ns, this.lr]
        let mixedDir = tmp[Math.round(Math.random())][idx]
        this.directions[idx] = mixedDir
        console.log('mixedDir: ' + mixedDir)
      }
      console.log('directions[' + idx + ']: ' + this.directions[idx])
      return this.directions[idx]
    },
    addStat: function (popup, userInput, resultText, result, reactionTime) {
      this.stats.push({ popup: popup, userInput: userInput, resultText: resultText, result: result, reactionTime: reactionTime })
    },
    getCorrects: function () {
      let corrects = 0
      this.stats.forEach(stat => {
        if (stat.result === 1) corrects++
      })

      return corrects
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
    showHideReactionDirLabel: function (id, color, hide, popupIdx) {
      console.log('dir-label >>> id: ' + id)
      this.setAttrSvgObject(id, 'visibility', hide ? 'hidden' : 'visible')
      this.setAttrSvgObject(id, 'fill', color)
      this.setTextSvg(id, this.directions[popupIdx])
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
      this.showHideReactionDirLabel('txt_' + this.ns[this.popupIdx], color, false, this.popupIdx)
      this.showResultText(text, reactionTime, color)

      if (fadeOut) {
        setTimeout(() => {
          if (this.trainingStarted) {
            this.showHideReactionDirLabel('txt_' + this.ns[this.popupIdx], 'black', true, this.popupIdx)
            this.hideResultText()
          }
        }, 1000)
      }
    },
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

      console.log('distance: ' + distance)
      console.log('sleepPerDegree: ' + sleepPerDegree)

      var move = function (rangeList, sleep, jumper = 1) {
        return new Promise((resolve, reject) => {
          let counter = 0
          function* pos () {
            while (counter < rangeList.length - 1) {
              yield rangeList[counter += jumper]
            }

            clearInterval(interval)
            console.log('toAngle: ' + toAngle)
            resolve(toAngle)
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
              resolve(toAngle)
              this.setAttrSvgObject('needle', 'transform', 'rotate(' + toAngle + ',200,200)')
            } else {
              this.setAttrSvgObject('needle', 'transform', 'rotate(' + nextPos + ',200,200)')
              this.setAttrSvgObject('needle', 'angle', String.valueOf(nextPos))
            }
          }, sleep)
        })
      }.bind(this)

      // Nadel 'ausschwingen' lassen
      let fromSwingOut = Math.max(2, Math.ceil(distance / 40))
      if (fromSwingOut <= 2) fromSwingOut = 3
      let swingOut = helper.getCustomListRange(fromSwingOut, 0)
      let swingOutRange = []
      swingOut.forEach(n => {
        swingOutRange.push(toAngle + n * 2)
        swingOutRange.push(toAngle - n * 2)
      })
      // Animation starten
      move(distanceRange, sleepPerDegree, 2).then(toAngle => move(swingOutRange, 50))
    },
    show: function () {
      $('#settingsModal').modal('show')
    },
    hide: function () {
      $('#settingsModal').modal('hide')
    },
    showStatistics: function () {
      $('#statsModal').modal('show')
    },
    hideStatistics: function () {
      $('#statsModal').modal('hide')
    }
  },
  mounted () {
    this.show()
    this.directions = this.ns.slice(0) // copy without reference

    // DEBUG
    this.addStat(this.directions[3], 'NE', 'hmmm', 1, 700)
    this.addStat(this.directions[6], 'SE', 'hmmm', 2, 1700)
    this.addStat(this.directions[2], 'N', 'hmmm', 3, 500)
    this.addStat(this.directions[7], 'E', 'hmmm', 4, 720)
    this.addStat(this.directions[0], 'SW', 'hmmm', 3, 130)
    this.addStat(this.directions[1], 'NE', 'hmmm', 2, 987)
    this.addStat(this.directions[3], 'NE', 'hmmm', 1, 700)
    this.addStat(this.directions[6], 'SE', 'hmmm', 2, 1700)
    this.addStat(this.directions[2], 'N', 'hmmm', 3, 500)
    this.addStat(this.directions[7], 'E', 'hmmm', 4, 720)
    this.addStat(this.directions[0], 'SW', 'hmmm', 3, 130)
    this.addStat(this.directions[1], 'NE', 'hmmm', 2, 987)
    this.addStat(this.directions[3], 'NE', 'hmmm', 1, 700)
    this.addStat(this.directions[6], 'SE', 'hmmm', 2, 1700)
    this.addStat(this.directions[2], 'N', 'hmmm', 3, 500)
    this.addStat(this.directions[7], 'E', 'hmmm', 4, 720)
    this.addStat(this.directions[0], 'SW', 'hmmm', 3, 130)
    this.addStat(this.directions[1], 'NE', 'hmmm', 2, 987)
    this.addStat(this.directions[3], 'NE', 'hmmm', 1, 700)
    this.addStat(this.directions[6], 'SE', 'hmmm', 2, 1700)
    this.addStat(this.directions[2], 'N', 'hmmm', 3, 500)
    this.addStat(this.directions[7], 'E', 'hmmm', 4, 720)
    this.addStat(this.directions[0], 'SW', 'hmmm', 3, 130)
    this.addStat(this.directions[1], 'NE', 'hmmm', 2, 987)
    // DEBUG ENDE
    // $('#table').bootstrapTable()

    // Listen to the event.
    EventBus.$on('kompass-key-event', keyName => {
      var directionKeys = ['8', '9', '6', '3', '2', '1', '4', '7']
      let keyEventIdx = directionKeys.indexOf(keyName)
      var toAngle = keyEventIdx * 45
      // console.log('toAngle: ' + toAngle)
      if (!this.trainingStarted) {
        this.moveNeedle(toAngle)
      }

      if (this.trainingStarted) {
        let reactionTime = new Date().getTime() - this.popupTime
        let color = 'black'
        let resultText = 'text'
        let reactionResult = -1
        if (this.reactInTime) {
          this.moveNeedle(toAngle)
          // auswerten ob richtig reagiert
          if (keyEventIdx === this.popupIdx) {
            console.log('correct! >>> reactiontime: ' + reactionTime)
            color = 'green'
            resultText = 'good'
            reactionResult = 1
          } else {
            console.log('wrong :( >>> reactiontime: ' + reactionTime)
            color = 'red'
            resultText = 'wrong'
            reactionResult = 2
          }
          this.showResult(reactionTime + 'ms', color, resultText, true)
          this.addStat(this.directions[this.popupIdx], this.directions[keyEventIdx], resultText, reactionResult, reactionTime) // TODO reactionResult

          this.reactInTime = false // nur eine Eingabe erlaubt nach Popup
          this.newPopup = false
        } else if (this.newPopup) {
          this.moveNeedle(toAngle)
          // zu langsam...
          if (keyEventIdx === this.popupIdx) {
            console.log('too slow! >>> reactiontime: ' + reactionTime)
            color = 'orange'
            resultText = 'too slow'
            reactionResult = 3
          } else {
            console.log('wrong & too slow :( >>> reactiontime: ' + reactionTime)
            color = 'red'
            resultText = 'too slow'
            reactionResult = 4
          }
          this.showResult(reactionTime + 'ms', color, resultText, true)
          this.addStat(this.directions[this.popupIdx], this.directions[keyEventIdx], resultText, reactionResult, reactionTime) // TODO reactionResult
          this.newPopup = false
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/test.scss';

.btn-danger {
  background-color: $btn-bg-color
}

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.buttonblock {
  display: none;
}
@include media-breakpoint-down(sm) {
  .buttonblock {
    display: block;
  }

  div[role=radiogroup] {
    display: block;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/form.css">
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form[role=login] {
  height: 540px;
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

.custom-select {
  flex: 1 1 auto;
}

.statSection {
  background: #f2f2f2;
  border-radius: 1em;
  width: 700px;
  height: 550px;
  padding: 10px;
}
.closeStat {
  position: absolute;
  right: 3%;
  top: 2%;
}
.table-responsive {
  overflow-y: scroll;
  height: 400px;
  font-size: 14px;
}
.modal-dialog-stat {
  max-width: 550px;
}
.svgpos {
}
.buttons {
  font-size: 1.2rem;
}
@media (max-width: 1200px) {
  .buttons {
    font-size: 0.9rem;
  }
}
@media (max-width: 768px) {
  .buttons {
    font-size: 0.5rem;
  }
  .table-responsive {
    font-size: 12px;
  }
}
@media (max-width: 576px) {
  .svgpos {
    width: 80%;
    left: 10%;
  }

  .buttons {
    font-size: 1.5rem
  }

  div.duration {
    left: 0%;
  }
  .table-responsive {
    font-size: 10px;
  }
}
</style>
