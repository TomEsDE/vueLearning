<template>
  <div name="company">
    <div class="jumbotron text-center">
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

    <div class="container-fluid text-left">
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

    <div class="container-fluid text-center">
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

    <div class="container-fluid text-center bg-grey">
      <h2>Portfolio</h2>
      <h4>What we have created</h4>
      <div class="row text-center slideanim">
        <div class="col-sm-4">
          <div class="thumbnail">
            <!-- <img src="paris.jpg" alt="Paris"> -->
            <font-awesome-layers class="fa-lg">
              <font-awesome-icon icon="circle" />
              <font-awesome-icon icon="check" transform="shrink-6" style="color: white;" />
            </font-awesome-layers>
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="newyork.jpg" alt="New York">
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="sanfran.jpg" alt="San Francisco">
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

    <div class="container-fluid">
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

    <div class="container-fluid bg-grey">
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
    <div id="googleMap" style="height:400px;width:100%;"></div>
    <!-- <script>
    function myMap() {
    var myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script> -->

  </div>
</template>

<script>
// import _ from 'lodash'
import mynav from './mynav.vue'
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  components: { mynav, FontAwesomeIcon },
  methods: {
    addSkill () {
    },
    remove (id) {
    },
    shuffle: function () {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";
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
