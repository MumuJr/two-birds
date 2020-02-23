<template>
  <div id="dashboard">
    <!-- Main Background Image -->
    <div class="jumbotronMain">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content">
              <h1>Two Birds Coffee</h1>
              <hr />
              <router-link to="/aboutus" class="btn btn-primary">Our Story</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Coffee Selection -->
    <div class="section">
      <div class="container">
        <div class="process">
          <div>
            <h2 class="processes">Not your average coffee importors</h2>
          </div>
          <div>
            <h3>Four years ago we started importing coffee from our family owned farm named Finca Esperanza. Improving the quality of the cup every year to meet the standards that roasters expected. Now we are branching out to help new farmers we trust, take the same steps we did and gain access to a market they could never reach.</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- SCROLL -->

    <div class="customer-logos">
      <div class="slide">
        <img src="../assets/domestique.png" />
      </div>
      <div class="slide">
        <img src="../assets/cattleDog.jpg" />
      </div>
      <div class="slide">
        <img src="../assets/phoenix.jpeg" />
      </div>
      <div class="slide">
        <img src="../assets/strongtree.png" />
      </div>
      <div class="slide">
        <img src="../assets/bluePrint.jpg" />
      </div>
      <div class="slide">
        <img src="../assets/Goodman+Icon.png" />
      </div>
      <div class="slide">
        <img src="../assets/contrabean.png" />
      </div>
      <div class="slide">
        <img src="../assets/theRoasterie.png" />
      </div>
      <div class="slide">
        <img src="../assets/JavaPlanet-copy-4.jpg" />
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contactus-1 section-image contact-us">
      <div class="col-md-5 col-sm-6 col-8">
        <div class="card card-contact card-raised">
          <form name="contact" @sumbit.prevent="submitMessage" action="POST" data-netlify="true">
            <div class="card-header text-center">
              <h4 class="card-title">Contact Us!</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 pr-2">
                  <label for="firstName">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    class="form-control"
                    placeholder="John"
                    v-model="firstName"
                  />
                </div>
                <div class="col-md-6 pr-2">
                  <label for="lastName">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    placeholder="Smith"
                    v-model="lastName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input
                  name="company"
                  type="text"
                  class="form-control"
                  v-model="company"
                  placeholder="Two Birds Coffee"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  type="text"
                  class="form-control"
                  v-model="message"
                  placeholder="Two Birds changed my life!"
                  rows="4"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p v-if="feedback" class="text-danger">{{ feedback }}</p>
                  <button class="btn btn-primary pull-right" type="submit">Send Message</button>
                </div>
                <div class="col-md-6" data-netlify-recaptcha="true"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      company: null,
      message: null,
      feedback: null,
      messages: []
    };
  },
  mounted() {
    $(".customer-logos").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      centerMode: true,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  },

  created() {},
  methods: {
    submitMessage() {
      if (this.message || this.firstName || this.lastName || this.email) {
        this.message = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.company = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message!";
      }
    }
  }
};
</script>



