import { Component, OnInit } from "@angular/core";
import { respostaUser } from "./user.model";
import { UserService } from "./user.service";


@Component({
    selector: 'app-crud',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})
export class userComponent implements OnInit{

respostaUser: respostaUser;
constructor(private userService: UserService){   

}
getResposta(){
    return this.userService.getUser().toPromise();
    
}
ngOnInit(){   
    this.getResposta().then((res)=>{
        this.respostaUser = res
        console.log(this.respostaUser.data);
    })
}
}