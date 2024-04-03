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
        redirect_uri: window.location.origin
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
