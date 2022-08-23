import { createApp } from "vue/dist/vue.esm-browser";

import VueComponentUI from "./entry";
var myName = 'Tom';

createApp({
  template: `
    <div>
      <UnoButton>默认按钮</UnoButton>
      <UnoButton color="white">白色按钮</UnoButton>
      <UnoButton color="green">绿色按钮</UnoButton>
      <UnoButton color="gray">灰色按钮</UnoButton>
      <UnoButton color="yellow">黄色按钮</UnoButton>
      <UnoButton color="red" round>红色按钮</UnoButton>
      <UnoButton color="blue" round icon="search">搜索</UnoButton>
      <UnoButton color="green" circle icon="edit"></UnoButton>
      </div>
      <div style="margin-top: 20px">
        <UnoButton size="small" >小号按钮</UnoButton>
        <UnoButton size="small" icon="edit" >小号按钮</UnoButton>
        <UnoButton>默认按钮</UnoButton>
        <UnoButton size="medium" >大号按钮</UnoButton>
      </div>
  `,
})
  .use(VueComponentUI)
  .mount("#app");
