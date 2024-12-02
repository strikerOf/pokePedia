import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from '../src/environments/environment';
import { enableProdMode } from '@angular/core'

if (environment.production) { enableProdMode(); }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // configurando el servicio :) ;)
if ('serviceWorker' in navigator && environment.production) 
  { navigator.serviceWorker.register('/ngsw-worker.js').then(() => { 
    console.log('Service Worker registrado exitosamente.'); 
  }).catch(err => { 
    console.error('Error al registrar el Service Worker:', err); 

  }); }