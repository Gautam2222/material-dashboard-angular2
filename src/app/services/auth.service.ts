import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl:string='https://localhost:7182/api/Account/'
  constructor(private http:HttpClient)
   { }

  login(loginObj:any){
   return this.http.post<any>(`${this.baseUrl}login`,loginObj);
  }
}
