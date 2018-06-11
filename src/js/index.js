import config from './phaser/config';
import Vue from '../../node_modules/vue/dist/vue'
import AppVue from './vue/App';
import BuildMenuVue from './vue/buildMenu';

window.EventBus = new Phaser.EventEmitter();


const game = new Phaser.Game(config);
Vue.component('build-menu', BuildMenuVue);
const App = new Vue(AppVue);

