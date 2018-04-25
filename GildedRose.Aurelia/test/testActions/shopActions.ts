import { StateHistory, nextStateHistory } from "aurelia-store";
import { State } from "state";
import { Item } from "models/item";

export function setShopItemsTestAction(currentState: StateHistory<State>, items): StateHistory<State> {
  let updatedState = {...currentState.present}
  updatedState.shopItems = items.map(i => new Item(i.Name, i.SellIn, i.Quality));

  return nextStateHistory(currentState, updatedState);
}
