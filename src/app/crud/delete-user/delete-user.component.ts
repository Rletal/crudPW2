import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.chamada().then((res) => {
        this.user = res.data;
        console.log("aaaaaaaaaa" + this.user.id);
    });
  }

  chamada() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    return this.userService.getUserId(this.id).toPromise();
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe(res => {
      alert('Removido com sucesso');
      this._route.navigate(['/User']);
    });
  }

  cancel() {
    this._route.navigate(['/User']);
  }
}
