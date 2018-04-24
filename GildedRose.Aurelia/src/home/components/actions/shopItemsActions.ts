import { StateHistory, nextStateHistory } from "aurelia-store";
import { State } from "state";

export function updateItemsAction(currentState: StateHistory<State>) {
  let updatedState = {...currentState.present}
  updatedState.shopItems = currentState.present.shopItems.map(item => { return {...item }});
  updateItems(updatedState.shopItems);

  return nextStateHistory(currentState, updatedState);
};

const updateItems = (items) => {
  for (var i = 0; i < items.length; i++)
  {
    if (items[i].name != "Aged Brie" && items[i].name != "Backstage passes to a TAFKAL80ETC concert")
    {
      if (items[i].quality > 0)
      {
        if (items[i].name != "Sulfuras, Hand of Ragnaros")
        {
          items[i].quality = items[i].quality - 1;
        }
      }
    }
    else
    {
      if (items[i].quality < 50)
      {
        items[i].quality = items[i].quality + 1;

        if (items[i].name == "Backstage passes to a TAFKAL80ETC concert")
        {
          if (items[i].sellIn < 11)
          {
            if (items[i].quality < 50)
            {
              items[i].quality = items[i].quality + 1;
            }
          }

          if (items[i].sellIn < 6)
          {
            if (items[i].quality < 50)
            {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }

    if (items[i].name != "Sulfuras, Hand of Ragnaros")
    {
      items[i].sellIn = items[i].sellIn - 1;
    }

    if (items[i].sellIn < 0)
    {
      if (items[i].name != "Aged Brie")
      {
        if (items[i].name != "Backstage passes to a TAFKAL80ETC concert")
        {
          if (items[i].quality > 0)
          {
            if (items[i].name != "Sulfuras, Hand of Ragnaros")
            {
              items[i].quality = items[i].quality - 1;
            }
          }
        }
        else
        {
          items[i].quality = items[i].quality - items[i].quality;
        }
      }
      else
      {
        if (items[i].quality < 50)
        {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }
}
