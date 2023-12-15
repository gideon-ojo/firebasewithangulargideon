import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from '../environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { HeaderComponent } from './header/header/header.component';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    SidenavComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCtVPVHzmL_5b1SILrC8vKjuU7OrLuo3Fo",
    authDomain: "gideon-ang.firebaseapp.com",
    projectId: "gideon-ang",
    storageBucket: "gideon-ang.appspot.com",
    messagingSenderId: "151247161666",
    appId: "1:151247161666:web:aedba0bd7609aef6cbe0db"
    }),
    AngularFireAuthModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
