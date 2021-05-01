import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResquestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: ResquestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.chamada().then((res) => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      };
    });
  }

  chamada() {
  this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    return this.userService.getUserId(this.id).toPromise();
  }

  atualizar() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name}, job: ${res.job}`);
      this._route.navigate(['/User']);
    });
  }

  cancel() {
    this._route.navigate(['/User']);
  }
}