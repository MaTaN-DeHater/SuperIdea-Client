import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {RatingModule} from "ngx-bootstrap/rating";
import { ReportsComponent } from './reports/reports.component';
import { IdeasComponent } from './ideas/ideas.component';
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReportsComponent,
    IdeasComponent,
    OurTeamComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
