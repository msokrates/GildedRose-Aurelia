import { Item } from "models/item";
import { AgedBrie } from "models/AgedBrie";
import { QualityDoesNotUpdateItem } from "models/qualityDoesNotUpdateItem";
import { BackstagePassesItem } from "models/backstagePassesItem";

export class Home {
  day: number = 1;

  items: Item[] = [];

  activate() {
    this.items.push(new Item("+5 Dexterity Vest", 10, 20));
    this.items.push(new AgedBrie("Aged Brie", 2, 0));
    this.items.push(new Item("Elixir of the Mongoose", 5, 7))
    this.items.push(new QualityDoesNotUpdateItem("Sulfuras, Hand of Ragnaros", 0, 80))
    this.items.push(new BackstagePassesItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
    this.items.push(new Item("Conjured Mana Cake", 3 ,6));
  }

  goToNextDay() {
    this.day++;

    this.items.forEach(i => {
      i.decreaseSellIn();
      i.updateQuality();
    });
  }
}
