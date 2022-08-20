/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// JSX转换插件
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "VueComponentUI",
      fileName: "vue-component-ui",
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'],
    },
    // outDir: 'lib'
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
