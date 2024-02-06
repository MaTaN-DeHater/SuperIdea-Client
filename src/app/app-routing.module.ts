import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {IdeasComponent} from "./ideas/ideas.component";
import {ReportsComponent} from "./reports/reports.component";
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ideas', component: IdeasComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'our-team', component:OurTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
