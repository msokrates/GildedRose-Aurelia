import { Item } from "models/item";
import { bindable } from 'aurelia-framework';

export class ShopItemCustomElement {
  @bindable item: Item;
}
