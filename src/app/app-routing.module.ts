import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './spericorn/login/login.component';
import { RegistrationComponent } from './spericorn/registration/registration.component';
import { ProfileComponent } from './spericorn/profile/profile.component';
import { AuthGuardGuard } from './common/auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  {path:'login',component:LoginComponent}, 
  {path:'registration', component:RegistrationComponent},
  {path:'profile', component:ProfileComponent,canActivate:[AuthGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
