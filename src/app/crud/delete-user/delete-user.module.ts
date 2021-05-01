import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user.component';

@NgModule({
  declarations: [
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DeleteUserModule { }
