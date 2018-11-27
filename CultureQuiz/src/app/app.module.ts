import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbdAccordionStatic } from './accordion-static';
import { FormsModule, ReactiveFormsModule } from './@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { AccordionStaticComponent } from './accordion-static/accordion-static.component';

const appRoutes: Routes = [
  {
    path: './contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NgbdAccordionStatic,
    ContactComponent,
    MainComponent,
    AccordionStaticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true } // debugging purposes only
    ),
    AppRoutingModule
  ],
  // exports: [
  //   RouterModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
