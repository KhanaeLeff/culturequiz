import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

// const appRoutes: Routes = [
//   {
//     path: 'contact',
//     component: ContactComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
  ],
  // exports: [
  //   RouterModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
