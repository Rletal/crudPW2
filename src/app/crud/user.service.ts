import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RespostaCreate, respostaUser } from './user.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL ="https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUser(): Observable<respostaUser> {
    return this.http.get<respostaUser>(this.URL);
  }

  criarUser(request: RequestCreate): Observable<RespostaCreate>{
    return this.http.post<RespostaCreate>(this.URL, request)


  }

}
