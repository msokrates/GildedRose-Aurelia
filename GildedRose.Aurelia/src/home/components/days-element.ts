import { bindable, autoinject } from "aurelia-framework";
import { updateItemsAction } from "./actions/shopItemsActions";
import { dispatchify, jump, Store, StateHistory } from "aurelia-store";
import { updateDaysAction } from "./actions/daysActions";
import { State } from "state";

@autoinject()
export class DaysElementCustomElement {
  @bindable days: number;

  constructor(private store: Store<StateHistory<State>>) {}

  async goToNextDay() {
    await this.store.dispatch(updateDaysAction);   
    await this.store.dispatch(updateItemsAction);
  }

  travelBackInTime() {
    dispatchify(jump)(-2);
  }
}
