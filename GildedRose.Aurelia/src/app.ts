import { Router } from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config, router) {
    let self = this;
    config.title = "Gilded Rose Kata"
    config.map([
      { route: '', moduleId: PLATFORM.moduleName("./home/home"), name: 'home', title: 'Home' },
      { route: 'step1', moduleId: PLATFORM.moduleName("./instructions/step1"), name: 'step1', title: 'Step 1' }
    ]);

    config.mapUnknownRoutes({ route: '', moduleId: PLATFORM.moduleName("./home/home"), name:'home', title: 'Home' });
    self.router = router;
  }
}
