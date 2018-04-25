import { StateHistory, Store } from 'aurelia-store';
import { State } from 'state';
import { SpecsContainer } from './specs-container';
import { Home } from 'home/home';
import { DaysElementCustomElement } from 'home/components/days-element';
import { setShopItemsTestAction } from './testActions/shopActions';
import { setDaysTestAction } from './testActions/daysActions';

export function register() {
  let store = createTestStore();
  registerTestActions(store);
  SpecsContainer.registerInstance(Store, store);
  
  let home = new Home(store);
  SpecsContainer.registerInstance(Home, home);
  
  SpecsContainer.registerSingleton(DaysElementCustomElement);
  SpecsContainer.registerSelf();
}

export function unregister() {
  let store : Store<StateHistory<State>> = SpecsContainer.get(Store);
  store.unregisterAction(setDaysTestAction);

  SpecsContainer.unregister(Store);
  SpecsContainer.unregister(Home);
  SpecsContainer.unregister(DaysElementCustomElement);
  SpecsContainer.unregisterSelf();
}

function createTestStore() : Store<StateHistory<State>> {
  const initialState = {
    past: [],
    present: { shopItems: [], days: 0 },
    future: []
  } as StateHistory<State>;
  const options = { history: { undoable: true } };
  return new Store(initialState, options); 
}

function registerTestActions(store) {
  store.registerAction("SetDaysTestAction", setDaysTestAction);
  store.registerAction("SetShopItemsTestAction", setShopItemsTestAction);
}
