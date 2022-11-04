import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiDomain = environment.ApiDomain;
  constructor(private HttpClient: HttpClient) { }

  public CheckUserName(ld_username: string): Observable<Login[]> {
    return this.HttpClient.get<Login[]>(this.ApiDomain + '/LoginControllers?Action=U&username=' + ld_username)
  }
  public CheckPassword(ld_username: string, ld_password: string): Observable<Login[]> {
    return this.HttpClient.get<Login[]>(this.ApiDomain + '/LoginControllers?Action=P&username=' + ld_username + '&password=' + ld_password)
  }
}
