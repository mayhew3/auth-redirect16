import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideAuth0({
      domain: 'mayhew3.auth0.com',
      clientId: 'HY2lTrNdFc6HDrTlSoKZNL0EriSi0dnW',
      authorizationParams: {
        audience: 'https://media-mogul-two.herokuapp.com',
        redirect_uri: window.location.origin,
        scope: 'profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
      leeway: 80,

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: ['/api/*'],
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
