import { App } from 'vue';
import MyButton from './button'
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';
import UnoButton from './button/index';

// 导出单独组件
export { MyButton, SFCButton, JSXButton,UnoButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(UnoButton.name, UnoButton);
  }
}


