import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { UserModule } from './crud/user.module';
import { CreateUsuarioModule } from './crud/create-usuario/create-usuario.module';
import { FormsModule } from '@angular/forms';
import { UpdateUserModule } from './crud/update-user/update-user.module';
import { DeleteUserModule } from './crud/delete-user/delete-user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    UserModule,
    CreateUsuarioModule,
    UpdateUserModule,
    DeleteUserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
