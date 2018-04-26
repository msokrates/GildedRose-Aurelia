import { Container, Resolver } from 'aurelia-dependency-injection';

export class SpecsContainer {
  private static readonly container: Container = new Container;

  public static get(key: any) {
    return this.container.get(key);
  }

  public static registerSingleton(key: any) : Resolver {
    return this.container.registerSingleton(key)
  }

  public static unregister(key: any) : void {
    this.container.unregister(key);
  }
}
