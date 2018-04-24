import { autoinject, bindable } from 'aurelia-framework';
import { Item } from "models/item";
import { Store, connectTo, StateHistory, nextStateHistory, jump } from "aurelia-store";
import { State } from 'state';
import { updateItemsAction } from './components/actions/shopItemsActions';
import { updateDaysAction } from './components/actions/daysActions';

@autoinject()
export class Home {
   public state: StateHistory<State>;

  constructor(private store: Store<StateHistory<State>>) {
    this.store.state.subscribe(state => {
      this.state = state
    });
    this.store.registerAction("UpdateItemsAction", updateItemsAction);
    this.store.registerAction("UpdateDaysAction", updateDaysAction);
  }
}
