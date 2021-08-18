import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  host = "http://localhost:8080"
  constructor(private http: HttpClient, private authService : AuthenticationServiceService) { }
  
  /* cette méthode retourne les coordonnées d'un utilisateur  */
  getUser() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get<user>(this.host+"/api/account", {headers : headers });
  }
}
