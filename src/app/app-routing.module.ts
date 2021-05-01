import { NgModule } from '@angular/core';
import { userComponent } from './crud/user.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuarioComponent } from './crud/create-usuario/create-usuario.component';
import { UpdateUserComponent } from './crud/update-user/update-user.component';
import { DeleteUserComponent } from './crud/delete-user/delete-user.component';


const routes: Routes = [
  { path: 'User', component: userComponent },
  { path: 'User/create', component: CreateUsuarioComponent },
  { path: 'User/update/:id', component: UpdateUserComponent},
  { path: 'User/delete/:id', component: DeleteUserComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class AppRoutingModule { }
