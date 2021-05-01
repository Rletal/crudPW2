import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  { path: 'User/update/:id', component: UpdateUserComponent},
  { path: 'User/delete/:id', component: DeleteUserComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class UserRoutingModule { }
