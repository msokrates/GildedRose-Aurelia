/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import { Item } from 'models/item';
import { State } from 'state';
import "rxjs/add/operator/pluck";

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  let initialState = new State;
  initialState.shopItems.push(new Item("+5 Dexterity Vest", 10, 20))
  initialState.shopItems.push(new Item("Aged Brie", 2, 0));
  initialState.shopItems.push(new Item("Elixir of the Mongoose", 5, 7))
  initialState.shopItems.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80))
  initialState.shopItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  initialState.shopItems.push(new Item("Conjured Mana Cake", 3, 6));
  initialState.days = 1;

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-store'), { initialState, history: { undoable: true, limit: 20 } });
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
