import { NgModule } from '@angular/core';
import { userComponent } from './crud/user.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuarioComponent } from './crud/create-usuario/create-usuario.component';


const routes: Routes = [
  { path: 'User', component: userComponent },
  { path: 'User/create', component: CreateUsuarioComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class AppRoutingModule { }
