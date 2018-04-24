import { StateHistory, nextStateHistory } from "aurelia-store";
import { State } from "state";

export function updateDaysAction(currentState: StateHistory<State>) {
  let updatedState = {...currentState.present}
  updatedState.days++;

  return nextStateHistory(currentState, updatedState);
};
