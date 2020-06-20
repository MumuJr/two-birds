// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Cloudinary from "cloudinary-vue";
import "./style/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faInstagramSquare, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Cloudinary, {
  configuration: { cloudName: "twobirds-coffee" },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
