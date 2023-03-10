import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import filters from "./helpers/filters";
import "normalize.css";
import "./assets/base.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.globalProperties.$filters = filters;

app.mount("#app");
