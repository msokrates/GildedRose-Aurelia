import { State } from "state";
import { StateHistory, nextStateHistory } from "aurelia-store";

export function setDaysTestAction(currentState: StateHistory<State>, days: number): StateHistory<State> {
  let updatedState = {...currentState.present}
  updatedState.days = days;

  return nextStateHistory(currentState, updatedState);
}
