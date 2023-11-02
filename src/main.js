import "./assets/style/main.css";
import SelectOption from "vue3-select-option-search";
import "vue3-select-option-search/dist/style.css";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.use(SelectOption);
app.mount("#app");
