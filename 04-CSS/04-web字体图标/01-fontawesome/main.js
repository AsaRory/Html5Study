import Vue from "vue";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faChild,
  faCircle,
  faArchive
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faChild, faCircle, faArchive, faComment, faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
