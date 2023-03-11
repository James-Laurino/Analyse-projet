import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StatComponent } from './statistics/statistique.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SuccessComponent } from './Success/Success.component';
import { LoginComponent } from './Login/Login.component';
import { AboutComponent } from './About/About.component';
import { LogoutComponent } from './logout/Logout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InfoComponent } from './info/info.component';
import { EntryComponent } from './entry/entry.component';
import { ClientComponent } from './clients/client.component';
import { EmployeComponent } from './employe/employe.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    StatComponent,
    InscriptionComponent,
    SuccessComponent,
    LoginComponent,
    AboutComponent,
    LogoutComponent,
    InfoComponent,
    DashbordComponent,
    EntryComponent,
    ClientComponent,
    EmployeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
