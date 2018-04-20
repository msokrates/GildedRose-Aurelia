import { defineFeature, loadFeature } from 'jest-cucumber';
import * as shopSteps from './shop.steps';
import * as iocHelper from '../../ioc-helper';

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
});
