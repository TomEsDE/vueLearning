<template>
  <div>
	  <mynav ref="nav" :showTwitch="false"/>

    <button v-on:click="setTimeout(moveNeedle(Math.ceil(Math.random() * 360)),0)"><h3>{{ buttonNeedleText }}</h3></button>
    <br />

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

var message = 'Kompass'
export default {
  data () {
    return {
      sharedItems: mynav.data,
      msg: message,
      buttonNeedleText: 'Kompass ausrichten'
    }
  },
  components: { mynav },
  methods: {
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

      var distanceRange = this.$helpers.getCustomListRange(from, to)

      console.log('from: ' + from + ' - to: ' + to)
      console.log('distanceRange >>> from: ' + distanceRange[0] + ' - to: ' + distanceRange[distanceRange.length - 1])
      console.log('distance: ' + distance)
      console.log('sleepPerDegree: ' + sleepPerDegree)

      var counter = 0
      var position = distanceRange[counter]
      var interval = setInterval(function () {
        position = distanceRange[counter++]
        // console.log('position: ' + position)
        document.getElementById('needle').setAttribute('transform', 'rotate(' + position + ',200,200)')
        document.getElementById('needle').setAttribute('angle', String.valueOf(position))
        if (counter === distanceRange.length) {
          clearInterval(interval)
          console.log('toAngle: ' + toAngle)
          document.getElementById('needle').setAttribute('transform', 'rotate(' + toAngle + ',200,200)')
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
    }
  },
  mounted () {
    // Listen to the event.
    EventBus.$on('kompass-key-event', keyName => {
      var directionKeys = ['8', '9', '6', '3', '2', '1', '4', '7']
      var toAngle = directionKeys.indexOf(keyName) * 45
      console.log('toAngle: ' + toAngle)
      this.moveNeedle(toAngle)
    })
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
