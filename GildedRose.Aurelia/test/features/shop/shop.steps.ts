import { Home } from './../../../src/home/home';
import { SpecsContainer } from './../../specs-container';

export const givenTheCurrentDayIs = given => {
  given(/the current day is set up to be (.*)/, currentDay => {
    let shop = SpecsContainer.get(Home);
    shop.day = parseInt(currentDay);
  });
};

export const whenWeGoToNextDay = when => {
  when(/the items are updated at the end of the day/, () => {
    let shop = SpecsContainer.get(Home);
    shop.goToNextDay();
  });
};

export const thenTheCurrentDayIs = then => {
  then(/the current day is now (.*)/, expectedDay => {
    let shop = SpecsContainer.get(Home);
    expect(shop.day).toBe(parseInt(expectedDay));
  });
};
