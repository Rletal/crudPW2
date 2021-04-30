import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { AppComponent } from 'src/app/app.component';
import { CreateUsuarioComponent } from './create-usuario.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CreateUsuarioModule { }
