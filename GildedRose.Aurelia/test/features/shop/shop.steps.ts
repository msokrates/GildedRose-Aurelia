import { Item } from 'models/item';
import { Home } from './../../../src/home/home';
import { SpecsContainer } from './../../specs-container';

export const givenTheCurrentDayIs = given => {
  given(/the current day is set up to be (.*)/, currentDay => {
    let shop: Home = SpecsContainer.get(Home);
    shop.day = parseInt(currentDay);
  });
};

export const givenWeHaveTheFollowingItems = given => {
  given(/I have the following items/, items => {
    let shop: Home = SpecsContainer.get(Home);
    items.forEach(item => {
      // shop.items.push(new Item(item.Name, item.SellIn, item.Quality))
    });
  });
};

export const whenWeGoToNextDay = when => {
  when(/the items are updated at the end of the day/, () => {
    let shop: Home = SpecsContainer.get(Home);
    shop.goToNextDay();
  });
};

export const thenTheCurrentDayIs = then => {
  then(/the current day is now (.*)/, expectedDay => {
    let shop = SpecsContainer.get(Home);
    expect(shop.day).toBe(parseInt(expectedDay));
  });
};

export const thenIShouldHaveTheFollowingItems = then => {
  then(/I should have the following items/, items => {
    let shop: Home = SpecsContainer.get(Home);
    let expectedItems = items.map(item => new Item(item.Name, parseInt(item.SellIn), parseInt(item.Quality)));

    // expect(shop.items).toEqual(expectedItems);
  });
};
