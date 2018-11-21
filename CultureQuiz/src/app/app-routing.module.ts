import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
