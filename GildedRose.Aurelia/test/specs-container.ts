import { Resolver } from 'aurelia-dependency-injection';
import { Container } from 'aurelia-framework';

export class SpecsContainer {
  public static readonly container: Container = new Container;

  public static get(key: any) {
    return this.container.get(key);
  }

  public static registerSelf(): any {
    Container.instance = this.container;
    this.container.registerInstance(Container, this.container);
  }

  public static registerSingleton(key: any) : Resolver {
    return this.container.registerSingleton(key)
  }

  public static registerInstance(key: any, instance: any) : Resolver  {
    return this.container.registerInstance(key, instance);
  }

  public static unregister(key: any) : void {
    this.container.unregister(key);
  }

  public static unregisterSelf(): any {
    this.container.unregister(Container);
  }
}
