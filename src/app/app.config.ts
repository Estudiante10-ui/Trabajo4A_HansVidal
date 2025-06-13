import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig = {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
  ],
};
