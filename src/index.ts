const s: string = 'Hello Typescript'
console.log(s)

import { createApp } from "vue";

// import LzButton from "./button";
import LzButton from "./LzButton.vue";
import JSXButton from './JSXButton';

createApp(JSXButton).mount("#app");
