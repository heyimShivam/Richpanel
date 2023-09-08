import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FacebookPageComponent } from './pages/facebook-page/facebook-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'facebookPage', component: FacebookPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
