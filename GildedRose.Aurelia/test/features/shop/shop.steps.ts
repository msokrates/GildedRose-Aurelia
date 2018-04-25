import { Store, StateHistory } from "aurelia-store";
import { State } from "state";
import { SpecsContainer } from "../../specs-container";
import { ShopItemsCustomElement } from "home/components/shop-items";
import { DaysElementCustomElement } from "home/components/days-element";
import { Item } from "models/item";
import { Home } from "home/home";
import { setShopItemsTestAction } from "../../testActions/shopActions";
import { setDaysTestAction } from "../../testActions/daysActions";


export const givenTheCurrentDayIs = given => {
  given(/the current day is set up to be (.*)/, async (currentDay) => {
    let store: Store<StateHistory<State>> = SpecsContainer.get(Store);
    await store.dispatch(setDaysTestAction, parseInt(currentDay));
  });
};

export const givenWeHaveTheFollowingItems = given => {
  given(/I have the following items/, async (items) => {
    let store: Store<StateHistory<State>> = SpecsContainer.get(Store);
    await store.dispatch(setShopItemsTestAction, items);
  });
};

export const whenWeGoToNextDay = when => {
  when(/the items are updated at the end of the day/, async () => {
    let daysElement: DaysElementCustomElement = SpecsContainer.get(DaysElementCustomElement);
    await daysElement.goToNextDay();
  });
};

export const thenTheCurrentDayIs = then => {
  then(/the current day is now (.*)/, expectedDay => {
    let home: Home = SpecsContainer.get(Home);
    expect(home.state.present.days).toBe(parseInt(expectedDay));
  });
};

export const thenIShouldHaveTheFollowingItems = then => {
  then(/I should have the following items/, items => {
    let home: Home = SpecsContainer.get(Home);
    let expectedItems = items.map(item => new Item(item.Name, parseInt(item.SellIn), parseInt(item.Quality)));

    expect(home.state.present.shopItems).toEqual(expectedItems);
  });
};
