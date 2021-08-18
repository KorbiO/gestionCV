import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService : AuthenticationServiceService) { }

  ngOnInit(): void {
   
    
  }
logout(){
  this.authService.logout()
}
isAuthenticated(){
  this.authService.isAuthenticated()
}
isAdmin(){
  this.authService.isAdmin()
}
idUser(){
  this.authService.isUser()
}
}
