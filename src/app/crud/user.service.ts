import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseUpdate, ResponseUser, RespostaCreate, respostaUser, ResquestUpdate } from './user.model';
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

  getUserId(id: String): Observable<ResponseUser> {
    const _url = `${this.URL}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }
  
  updateUser(id: String, request: ResquestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.URL}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request);
  }

  deleteUser(id: String): Observable<any> {
    const _url = `${this.URL}/${id}`;
    return this.http.delete<any>(_url);
  }
}
