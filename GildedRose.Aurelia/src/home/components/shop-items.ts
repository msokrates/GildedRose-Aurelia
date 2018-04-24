import { Item } from "models/item";
import { bindable } from 'aurelia-framework';

export class ShopItemsCustomElement {
  @bindable items: Item[];
}
