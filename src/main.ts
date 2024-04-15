import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import DrawerComponent from "./components/DrawerComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";
import NavBarComponent from "./components/Navigation/NavbarComponent.vue";

const app = createApp(App)
  .use(router)
  .component("drawer", DrawerComponent)
  .component("modal", ModalComponent)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("font-awesome-layers", FontAwesomeLayers)
  .component("font-awesome-layers-text", FontAwesomeLayersText)
  .component("nav-bar", NavBarComponent);
app.mount("#app");
