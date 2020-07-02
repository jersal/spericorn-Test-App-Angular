import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProfileComponent, RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,  
    MatInputModule,
    HttpClientModule,
   
  ]
})
export class SpericornModule { }
