import { autoinject, bindable } from 'aurelia-framework';
import { Item } from "models/item";
import { Store, connectTo, StateHistory, nextStateHistory } from "aurelia-store";
import { State } from 'state';

const updateItemsAction = (state: StateHistory<State>) => {
  return nextStateHistory(state, Object.assign({}, state, {
    shopItems: updateItems(state.present.shopItems),
    days: state.present.days
  }));
};

const updateDaysAction = (state: StateHistory<State>) => {
  return nextStateHistory(state, Object.assign({}, state, {
    days: state.present.days + 1,
    shopItems: state.present.shopItems
  }));
};

const updateItems = (items) : Item[] => {
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

  return items;
}

@autoinject()
export class Home {
   public state: StateHistory<State>;

  constructor(private store: Store<StateHistory<State>>) {
    this.store.state.subscribe(state => this.state = state);
    this.store.registerAction("UpdateItemsAction", updateItemsAction);
    this.store.registerAction("UpdateDaysAction", updateDaysAction);
  }

  goToNextDay() {
    this.store.dispatch(updateItemsAction);
    this.store.dispatch(updateDaysAction);
  }
}
