import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { NotificationServiceService } from '../services/notification-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthenticationServiceService ,private router:Router,
    private userService : UserServiceService , private notifyService : NotificationServiceService) { }

  ngOnInit(): void {
    }
  
  onLogin(data:any){
      data.rememberMe = true
      this.authService.login(data).subscribe(respo =>{
        this.authService.authenticated = true
      this.authService.jwt = JSON.stringify(respo.headers.get('Authorization')).substring(7);
      this.authService.saveToken(this.authService.jwt);
      this.router.navigateByUrl('/home'); 
      if(respo.status >= 200 && respo.status <300){
        this.authService.authenticatedUser = true
      }
      console.log(this.authService.authenticatedUser);
      this.getuser() 
      
    });
  
  }
  getuser(){
    this.userService.getUser().subscribe(data =>{
      console.log(data.id);
      localStorage.setItem("idUser", JSON.stringify(data.id))  
    })
  }

}
