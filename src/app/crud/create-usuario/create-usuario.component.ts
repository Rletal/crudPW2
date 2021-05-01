import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate, RespostaCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  request: RequestCreate ={
    name: '',
    job: '',

  }
  
  response: RespostaCreate;

  constructor(private userService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.criarUser(this.request).subscribe(res =>{
      this.response= res
      alert("Criado com sucesso.\n ID: " + this.response.id +
      ", Nome: " + this.response.name + ", Sobrenome: " + this.response.job + ".");
      this._route.navigate(['/User']);
    })
  }

  cancel() {
    this._route.navigate(['/User']);
  }

}
