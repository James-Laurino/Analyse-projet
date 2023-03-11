import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './statistics/statistique.component';
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

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"stat", component:StatComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"success", component:SuccessComponent},
  {path:"Login", component:LoginComponent},
  {path:"About", component:AboutComponent},
  {path:"Logout", component:LogoutComponent},
  {path:"Dashbord", component:DashbordComponent},
  {path:"Info", component:InfoComponent},
  {path:"Entry", component:EntryComponent},
  {path:"Client", component:ClientComponent},
  {path:"Employe", component:EmployeComponent},
  {path:"Contact", component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
