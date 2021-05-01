import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { userComponent } from './user.component';
import { AppComponent } from '../app.component';
import { RouteConfigLoadEnd } from '@angular/router';
import {UserRoutingModule} from './user-routing.module';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [
    userComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UserModule { }
