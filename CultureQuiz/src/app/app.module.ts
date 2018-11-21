import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: './contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
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
