import { Home } from './../src/home/home';
import { SpecsContainer } from "./specs-container";

export function register() {
  SpecsContainer.registerSingleton(Home);
}

export function unregister() {
  SpecsContainer.unregister(Home);
}
