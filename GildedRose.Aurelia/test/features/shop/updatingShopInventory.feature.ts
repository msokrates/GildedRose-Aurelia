import { loadFeature, defineFeature } from 'jest-cucumber';
import * as iocHelper from '../../ioc-helper';
import * as shopSteps from './shop.steps';

const feature = loadFeature('test/features/shop/updatingShopInventory.feature');

defineFeature(feature, test => {
  beforeEach(() => {
    iocHelper.register();
  });

  afterEach(() => {
    iocHelper.unregister();
  })

  test('The current day is updated at the end of the day', ({ given, when, then }) => {
    shopSteps.givenTheCurrentDayIs(given);
    shopSteps.whenWeGoToNextDay(when);
    shopSteps.thenTheCurrentDayIs(then);
  });

  test('A typical item degrades at the end of the day', ({given, when, then}) => {
    shopSteps.givenWeHaveTheFollowingItems(given);
    shopSteps.whenWeGoToNextDay(when);
    shopSteps.thenIShouldHaveTheFollowingItems(then);
  });
});
