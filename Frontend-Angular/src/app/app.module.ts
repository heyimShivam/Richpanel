import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginFormComponent } from './pages/login-page/component/login-form/login-form.component';
import { SignupFormComponent } from './pages/signup-page/component/signup-form/signup-form.component';
import { FacebookPageComponent } from './pages/facebook-page/facebook-page.component';
import { ConnectFbPageComponent } from './pages/facebook-page/connect-fb-page/connect-fb-page.component';
import { DeleteFbPageComponent } from './pages/facebook-page/delete-fb-page/delete-fb-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    FacebookPageComponent,
    ConnectFbPageComponent,
    DeleteFbPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
