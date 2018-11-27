import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Import Material angular library //
import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
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
