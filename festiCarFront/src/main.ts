import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { initializeApp } from 'firebase/app';

if (environment.production) {
  enableProdMode();
}

// Initialisez Firebase avec votre configuration Firebase
const firebaseConfig = environment.firebase;
initializeApp(firebaseConfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
