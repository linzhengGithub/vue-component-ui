import { App } from 'vue';
import UnoButton from './button/index';

// 导出单独组件
export { UnoButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App) {
    app.component(UnoButton.name, UnoButton);
  }
}


