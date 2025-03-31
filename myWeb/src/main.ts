import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(),  // Add this line
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));