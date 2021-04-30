import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.criarUser(this.request).subscribe(res =>{
      this.response= res


    })


  }

}
