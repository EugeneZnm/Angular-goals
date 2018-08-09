import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular dynamically creates browser platform
platformBrowserDynamic().
// tslint:disable-next-line:max-line-length
// Angular bootstraps root module which is AppModule (bootstrapping sets up execution environment finding AppComponent from the bootstrap array in the AppModule creating instance of it within its selector tag in index.html file)
bootstrapModule(AppModule)
  .catch(err => console.log(err));
