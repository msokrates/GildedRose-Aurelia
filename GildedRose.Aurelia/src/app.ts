import { Router } from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config, router) {
    let self = this;
    config.title = "Gilded Rose Kata"
    config.map([
      { route: '', moduleId: PLATFORM.moduleName("./home/home"), name: 'home', title: 'Home' }
    ]);

    config.mapUnknownRoutes({ route: '', moduleId: PLATFORM.moduleName("./home/home"), name:'home', title: 'Home' });
    self.router = router;
  }
}
