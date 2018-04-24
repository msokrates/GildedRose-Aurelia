import { bindable } from "aurelia-framework";
import { updateItemsAction } from "./actions/shopItemsActions";
import { dispatchify, jump } from "aurelia-store";
import { updateDaysAction } from "./actions/daysActions";

export class DaysElementCustomElement {
  @bindable days: number;

  goToNextDay() {    
    dispatchify(updateDaysAction)();
    dispatchify(updateItemsAction)();
  }

  travelBackInTime() {
    dispatchify(jump)(-2);
  }
}
