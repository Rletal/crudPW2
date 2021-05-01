import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UpdateUserModule { }
