<template>
  <div id="company" name="company">
    <nav id="navbar-scrollspy" class="navbar navbar-expand-sm navbar-light sticky-top p-0">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-0 ml-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">ABOUT</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#services">SERVICES</a></li>
          <li class="nav-item"><a class="nav-link" href="#portfolio">PORTFOLIO</a></li>
          <li class="nav-item"><a class="nav-link" href="#pricing">PRICING</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron rounded-0 text-center">
      <h1 class="display-4">Company</h1>
      <p class="lead">We specialize in blablabla</p>
      <form class="form-inline justify-content-center">
        <div class="input-group">
          <input type="email" class="form-control" size="50" placeholder="Email Address" required>
          <div class="input-group-btn">
            <button type="button" class="btn btn-danger">Subscribe</button>
          </div>
        </div>
      </form>
    </div>

    <div id="about" class="container-fluid text-left">
      <div class="row">
        <div class="col-sm-8">
          <h2>About Company Page</h2>
          <h4>Lorem ipsum..</h4>
          <p>Lorem ipsum..</p>
          <button class="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div class="col-sm-4 slideanim">
          <font-awesome-icon class="logo" icon="signal" size="lg" />
        </div>
      </div>
    </div>

    <div class="container-fluid bg-grey text-left">
      <div class="row">
        <div class="col-sm-4 slideanim">
          <font-awesome-icon class="logo" icon="globe" size="lg" />
        </div>
        <div class="col-sm-8">
          <h2>Our Values</h2>
          <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
          <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
        </div>
      </div>
    </div>

    <div id="services" class="container-fluid text-center">
      <h2>SERVICES</h2>
      <h4>What we offer</h4>
      <br>
      <div class="row slideanim">
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="power-off" />
          <h4>POWER</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="heart" />
          <h4>LOVE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="lock" />
          <h4>JOB DONE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
      <br><br>
      <div class="row slideanim">
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="leaf" />
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="certificate" />
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <font-awesome-icon class="logo-small" icon="wrench" />
          <h4>HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>

    <div id="portfolio" class="container-fluid text-center bg-grey">
      <h2>Portfolio</h2>
      <h4>What we have created</h4>
      <div class="row text-center slideanim">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="../assets/img/paris.jpg" alt="Paris">
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="../assets/img/new-york.jpg" alt="New York">
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="../assets/img/sanfran.jpg" alt="San Francisco">
            <p><strong>San Francisco</strong></p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div>
      <h2>What our customers say</h2>
      <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
          <h4>"This company is the best. I am so happy with the result!"<br><span style="font-style:normal;">Michael Roe, Vice President, Comment Box</span></h4>
          </div>
          <div class="carousel-item">
            <h4>"One word... WOW!!"<br><span style="font-style:normal;">John Doe, Salesman, Rep Inc</span></h4>
          </div>
          <div class="carousel-item">
            <h4>"Could I... BE any more happy with this company?"<br><span style="font-style:normal;">Chandler Bing, Actor, FriendsAlot</span></h4>
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <font-awesome-icon class="carousel-control-prev-icon" icon="angle-left" size="lg" />
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <font-awesome-icon class="carousel-control-next-icon" icon="angle-right" size="lg" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div id="pricing" class="container-fluid">
      <div class="text-center">
        <h2>Pricing</h2>
        <h4>Choose a payment plan that works for you</h4>
      </div>
      <div class="row slideanim">
        <div class="col-sm-4">
          <div class="panel panel-default text-center">
            <div class="panel-heading">
              <h1>Basic</h1>
            </div>
            <div class="panel-body">
              <p><strong>20</strong> Lorem</p>
              <p><strong>15</strong> Ipsum</p>
              <p><strong>5</strong> Dolor</p>
              <p><strong>2</strong> Sit</p>
              <p><strong>Endless</strong> Amet</p>
            </div>
            <div class="panel-footer">
              <h3>$19</h3>
              <h4>per month</h4>
              <button class="btn btn-lg d-inline">Sign Up</button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default text-center">
            <div class="panel-heading">
              <h1>Pro</h1>
            </div>
            <div class="panel-body">
              <p><strong>50</strong> Lorem</p>
              <p><strong>25</strong> Ipsum</p>
              <p><strong>10</strong> Dolor</p>
              <p><strong>5</strong> Sit</p>
              <p><strong>Endless</strong> Amet</p>
            </div>
            <div class="panel-footer">
              <h3>$29</h3>
              <h4>per month</h4>
              <button class="btn btn-lg d-inline">Sign Up</button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default text-center">
            <div class="panel-heading">
              <h1>Premium</h1>
            </div>
            <div class="panel-body">
              <p><strong>100</strong> Lorem</p>
              <p><strong>50</strong> Ipsum</p>
              <p><strong>25</strong> Dolor</p>
              <p><strong>10</strong> Sit</p>
              <p><strong>Endless</strong> Amet</p>
            </div>
            <div class="panel-footer">
              <h3>$49</h3>
              <h4>per month</h4>
              <button class="btn btn-lg d-inline">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="container-fluid bg-grey">
      <div class="row">
        <div class="col-sm-5 slideanim text-left">
          <h2 class="d-block d-sm-none">CONTACT</h2>
          <h2 class="opacity-0 d-none d-sm-block">CONTACT</h2>
          <p>Contact us and we'll get back to you within 24 hours.</p>
          <p><font-awesome-icon icon="map-marker-alt" /> Chicago, US</p>
          <p><font-awesome-icon icon="mobile-alt" /> +00 1515151515</p>
          <p><font-awesome-icon icon="envelope" /> myemail@something.com</p>
        </div>
        <div class="col-sm-7 slideanim">
          <h2 class="text-left d-none d-sm-block">CONTACT</h2>
          <div class="row">
            <div class="col-sm-6 form-group">
              <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
            </div>
            <div class="col-sm-6 form-group">
              <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
            </div>
          </div>
          <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
          <div class="row">
            <div class="col-sm-12 form-group">
              <button class="btn btn-default pull-right d-inline float-right" type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Google Maps -->
    <div id="googleMap" class="google-map slideanim"></div>

    <!-- footer -->
    <footer class="container-fluid text-center">
      <a href="#company" title="To Top">
         <font-awesome-icon class="fontawesome" icon="chevron-up" size="lg" />
      </a>
      <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
    </footer>
    </div>
</template>

<script>
/* global google */
// import _ from 'lodash'
import mynav from './mynav.vue'
import { EventBus } from '../event-bus.js'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import $ from 'jquery'

export default {
  name: 'Company',
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      deltaY: 0,
      currentActiveSection: '#about',
      navLinkArray: [],
      googleMap: null
    }
  },
  components: { mynav, FontAwesomeIcon },
  methods: {
    addSkill () {
    },
    remove (id) {
    },
    shuffle: function () {
    },
    myMap: function () {
      var myCenter = new google.maps.LatLng(49.9574965, 11.61761869999998)
      var mapProp = { center: myCenter, zoom: 14, scrollwheel: true, draggable: true, mapTypeId: google.maps.MapTypeId.ROADMAP }
      var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
      var marker = new google.maps.Marker({position: myCenter})
      marker.setMap(map)
    },
    scrollToAnimation: function (hash, speed = 900) {
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, speed, () => {
        this.deltaY = 0
        // window.location.hash = hash
      }) // Add hash (#) to URL when done scrolling (default click behavior)
    }
  },
  mounted () {
    $(window).scroll(function () {
      $('.slideanim').each(function () {
        var pos = $(this).offset().top - 400

        var winTop = $(window).scrollTop()
        if (pos < winTop + 600) {
          $(this).addClass('scrollanim')
        }
      })
    })

    const self = this
    $(document).ready(function () {
      // Add smooth scrolling to all links in navbar + footer link
      $('.navbar a, footer a[href="#company"]').on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
          // Prevent default anchor click behavior
          event.preventDefault()

          // Store hash
          var hash = this.hash
          console.log('hash: ' + hash)
          self.currentActiveSection = hash
          self.scrollToAnimation(this.hash)
        } // End if
      })
    })

    // document.addEventListener('wheel', this.$helpers.handleScroll)

    // Listen to the event.
    EventBus.$off('wheel-event') // um 'multiple' Listener-Anmeldungen zu vermeiden
    EventBus.$on('wheel-event', e => {
      if (this.deltaY === -99999) return

      // richtungs-wechsel?
      if ((this.deltaY > 0 && e.deltaY < 0) || (this.deltaY < 0 && e.deltaY > 0)) {
        this.deltaY = 0
      }

      this.deltaY += e.deltaY
      console.log('scroll-event-delta: ' + this.deltaY)
      if (Math.abs(this.deltaY) > 500) {
        // go to next section
        let newActiveSection = this.navLinkArray[this.navLinkArray.indexOf(this.currentActiveSection) + (this.deltaY > 0 ? 1 : -1)]
        console.log('newActiveSection: ' + newActiveSection)
        if (newActiveSection) {
          this.deltaY = -99999
          this.currentActiveSection = newActiveSection
          self.scrollToAnimation(newActiveSection, 1500)
        }
      }
    })

    $('.nav-link').each(function () {
      // console.log('a href: ' + $(this).attr('href'))
      self.navLinkArray.push($(this).attr('href'))
    })

    // $('[data-spy="scroll"]').each(function () {
    //   $(this).scrollspy('refresh')
    // })

    this.myMap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";
.navbar {
  margin-bottom: 0;
  background-color: #f4511e;
  z-index: 9999;
  border: 0;
  font-size: 12px !important;
  letter-spacing: 4px;
  border-radius: 0;
}

.navbar li a, .navbar .navbar-brand {
  color: #fff !important;
}

.navbar-brand {
  padding-left: 10px;
}

.navbar-nav {
  line-height: 2 !important;
}

.navbar-nav li a:hover, .navbar-nav li.active a, .navbar-nav li a.active {
  color: #f4511e !important;
  background-color: #fff !important;
}

.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}

.jumbotron {
  background-color: #f4511e;
  color: #fff;
  padding: 100px 25px;
}

.container-fluid {
  padding: 60px 50px;
}

.bg-grey {
    background-color: #f6f6f6;
}

.logo-small {
  color: #f4511e;
  font-size: 50px;
}

.logo {
  color: #f4511e;
  font-size: 200px;
}
.thumbnail {
  padding: 0 0 15px 0;
  border: none;
  border-radius: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

.carousel-control-prev, .carousel-control-next {
  background-image: none;

  .carousel-control-prev-icon, .carousel-control-next-icon {
    color: #f4511e;
    width: 100px;
    height: 50px;
  }
}

.carousel-indicators li {
  margin-top: 100px;
  border-color: #f4511e;
}

.carousel-indicators li.active {
  background-color: #f4511e;
}

.carousel-item h4 {
  font-size: 19px;
  line-height: 1.375em;
  font-weight: 400;
  font-style: italic;
  margin: 70px 0;
}

.item span {
  font-style: normal;
}
.panel {
    border: 1px solid #f4511e;
    border-radius:0;
    transition: box-shadow 0.5s;
}

.panel:hover {
    box-shadow: 5px 0px 40px rgba(0,0,0, .2);
}
.logo-small:hover {
  animation:         pulse 1s infinite;
}
.panel-footer .btn:hover {
    border: 1px solid #f4511e;
    background-color: #fff !important;
    color: #f4511e;
}

.panel-heading {
    color: #fff !important;
    background-color: #f4511e !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.panel-footer {
    background-color: #fff !important;
}

.panel-footer h3 {
    font-size: 32px;
}

.panel-footer h4 {
    color: #aaa;
    font-size: 14px;
}

.panel-footer .btn {
    margin: 15px 0;
    background-color: #f4511e;
    color: #fff;
}

.opacity-0 {
  opacity: 0;
}

.slideanim { visibility:hidden; }
.scrollanim {
  -webkit-animation: zoomIn 2s; /* Safari 4+ */
  -moz-animation:    zoomIn 2s; /* Fx 5+ */
  -o-animation:      zoomIn 2s; /* Opera 12+ */
  animation:         zoomIn 2s; /* IE 10+, Fx 29+ */
  visibility: visible;
}
.slide {
    /* The name of the animation */
    animation-name: slide;
    -webkit-animation-name: slide;
    /* The duration of the animation */
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    /* Make the element visible */
    visibility: visible;
}
.google-map {
  height: 400px;
  width: 100%;
}

footer .fontawesome {
    font-size: 20px;
    margin-bottom: 20px;
    color: #f4511e;
}

/* Go from 0% to 100% opacity (see-through) and specify the percentage from when to slide in the element along the Y-axis */
@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(70%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@-webkit-keyframes slide {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

@include media-breakpoint-up(md) {
  .col-sm-4 {
      text-align: center;
      margin: 25px 0;
  }
}
</style>
