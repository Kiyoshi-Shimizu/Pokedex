import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const users: User[] = [
  {email:"emailAdmin@email.com",password:"1234",role:"admin"},
  {email:"emailUser@email.com", password:"1234",role:"user"}
]

export interface User{
  email:string;
  password: string;
  role:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = users;
  constructor() { }

  isLoggedIn(): Observable<boolean>{
    let user = sessionStorage.getItem('userInfo');
    if(user == null)
      return of(false);
    return of(true)
  }

  login(email:string, password: string): Observable<boolean>{
    let user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password.toLowerCase() === password.toLowerCase());
    if(user){
      sessionStorage.setItem("userInfo", JSON.stringify(user));
      return of(true);
    }
    return of(false);
  }
}
