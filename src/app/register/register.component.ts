import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthenticationServiceService ,private router:Router) { }

  ngOnInit(): void {
    
  }
  onRegister(data:any){
    data.activated = true
    let todayISOString : string = new Date().toISOString()
    data.createdDate = todayISOString
    this.authService.register(data).subscribe(respo =>{
    console.log(respo);
    this.router.navigateByUrl('/login'); 
  });
 

}
}
