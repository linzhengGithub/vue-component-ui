// const s: string = 'Hello Typescript'
// console.log(s)

import { createApp } from "vue/dist/vue.esm-browser";

// import LzButton from "./button";
import LzButton from "./LzButton.vue";
import JSXButton from './JSXButton';
import UnoButton from './button/index';
import VueComponentUI from './entry';

createApp({
  template:
    `
    <div>
      <UnoButton color="blue">蓝色按钮</UnoButton>
      <UnoButton color="green">绿色按钮</UnoButton>
      <UnoButton color="gray">灰色按钮</UnoButton>
      <UnoButton color="yellow">黄色按钮</UnoButton>
      <UnoButton color="red">红色按钮</UnoButton>
      <UnoButton color="blue" round plain icon="search" ></UnoButton>
      <UnoButton color="green" round plain icon="edit" ></UnoButton>
      <UnoButton color="gray" round plain icon="check" ></UnoButton>
      <UnoButton color="yellow" round plain icon="message" ></UnoButton>
      <UnoButton color="red" round plain icon="directions-run" ></UnoButton>
    </div>
  `
})
  .use(VueComponentUI)
  .mount("#app");
