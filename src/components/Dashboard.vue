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
            <h2 class="processes">Not Just Coffee Importors</h2>
          </div>
          <div class="d-flex justify-content-center">
            <p class="text-center text-justify col-8 processes_dash">
              Four years ago we started importing coffee from our family owned farm named Finca Esperanza. Improving
              the quality of the cup every year to meet the standards that roasters expected. Now we are branching out
              to help new farmers we trust, take the same steps we did and gain access to a market they could never
              reach.
            </p>
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
          <form
            name="contact"
            @sumbit.prevent="submitMessage"
            action="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="ask-question" />
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
                    v-model="form.firstName"
                  />
                </div>
                <div class="col-md-6 pr-2">
                  <label for="lastName">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    placeholder="Smith"
                    v-model="form.lastName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input
                  name="company"
                  type="text"
                  class="form-control"
                  v-model="form.company"
                  placeholder="Two Birds Coffee"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  v-model="form.email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  type="text"
                  class="form-control"
                  v-model="form.message"
                  placeholder="Two Birds changed my life!"
                  rows="4"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p v-if="form.feedback" class="text-danger">{{ form.feedback }}</p>
                  <button class="btn btn-primary pull-right" type="submitMessage">Send Message</button>
                </div>
                <div class="col-md-6" data-netlify-recaptcha="true"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <!-- Footer -->
      <footer class="page-footer font-small indigo">
        <!-- Footer Links -->
        <div class="container text-center text-md-left footer__info">
          <!-- Grid row -->
          <div class="row footer__rows">
            <!-- Grid column -->
            <div class="col-md-3 mx-auto">
              <!-- Links -->
              <h5 class="font-weight-bold text-uppercase mt-3 mb-2">Two Birds Coffee</h5>
              <div>
                <p>Farm owners, importers, and exporters</p>
                <p>Our passion is coffee</p>
              </div>
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none" />

            <!-- Grid column -->
            <div class="col-md-3 mx-auto socials">
              <!-- Links -->
              <h5 class="font-weight-bold text-uppercase mt-3 mb-2">Socials</h5>
              <div class="social__list">
                <ul class="list-unstyled footer__list">
                  <li class="brand__icon">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" />
                  </li>
                  <li class="brand__icon">
                    <font-awesome-icon :icon="['fab', 'instagram-square']" />
                  </li>
                  <li class="brand__icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </li>
                </ul>
                <ul class="list-unstyled footer__list">
                  <li class="brand__name">
                    <span>FaceBook</span>
                  </li>
                  <li class="brand__name">
                    <span>Instagram</span>
                  </li>
                  <li class="brand__name">
                    <span>LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none" />

            <!-- Grid column -->
            <div class="col-md-3 mx-auto">
              <!-- Links -->
              <h5 class="font-weight-bold text-uppercase mt-3 mb-2">Get in touch</h5>

              <ul class="list-unstyled">
                <li>
                  <h6>Tel: +1 561-289-2525</h6>
                </li>
                <li>
                  <h6>Email: info@twobirds.coffee</h6>
                </li>
              </ul>
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none" />

            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
        <!-- Footer Links -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3 footer__bottom">
          <span class="footer__bottom_text">© 2020 Copyright:</span>
          <a href class="footer__bottom_text">Two Birds Coffee</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: () => ({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      feedback: ""
    }
  }),
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
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submitMessage() {
      if (form.message || form.firstName || form.lastName || form.email) {
        fetch("/", {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-urlencoded"
          },
          body: this.encode({
            "form-name": "contact",
            ...this.form
          })
        })
          .then(() => console.log("Message sent"))
          .catch(e => console.error(e));
      } else {
        form.feedback = "You must enter a message!";
      }
    }
  }
};
</script>
