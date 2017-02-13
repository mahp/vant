import Sample from '../packages/sample/index.js';
import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import Field from '../packages/field/index.js';
import Radio from '../packages/radio/index.js';
import Cell from '../packages/cell/index.js';
import Icon from '../packages/icon/index.js';
// zenui
import '../packages/zenui/src/index.pcss';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Sample.name, Sample);
  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  Vue.component(Field.name, Field);
  Vue.component(Radio.name, Radio);
  Vue.component(Cell.name, Cell);
  Vue.component(Icon.name, Icon);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  Sample,
  Button,
  Switch,
  Field,
  Radio,
  Cell,
  Icon
};