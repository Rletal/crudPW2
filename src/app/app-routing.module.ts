import { NgModule } from '@angular/core';
import { userComponent } from './crud/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'User', component: userComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class AppRoutingModule { }
