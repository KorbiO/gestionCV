import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  host = "http://localhost:8080"
  public authenticatedUser: any;
  jwt: any ;
  username: string = "";
  roles: Array<string> = [];
  authenticated: Boolean = false;
  constructor(private http: HttpClient) { }
  login(data:any) {
    return this.http.post(this.host + '/api/authenticate', data, {observe: 'response'}); 
  }
  register(data:any) {
    return this.http.post(this.host + '/api/register', data, {observe: 'response'}); 
  }
  saveToken(jwt: string) {
    console.log(jwt);
    
    localStorage.setItem('token', jwt); 
    this.jwt = jwt;
    
    this.parseJWT();
      }
      parseJWT() {     
      const jwtHelper = new JwtHelperService();
      const objJWT = jwtHelper.decodeToken(this.jwt);
      this.username = objJWT.sub;
      localStorage.setItem('authenticatedUser', this.username); 
      this.roles = objJWT.auth;  
      console.log(this.roles);
      
      }
      isAdmin() {
        return this.roles.indexOf('ROLE_ADMIN') >= 0;
       }
       isUser() {
         return this.roles.indexOf('ROLE_USER') >= 0;
       }
       logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('idUser');
        this.jwt = "";
        this.username = "";
        this.authenticatedUser = false
        this.roles = [];
        this.authenticated = false
      }
       isAuthenticated(){
        return this.authenticated = true;
      } 
      
}
