import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = ''
  password = ''

  constructor(private router:Router,private authService:AuthService) {
  }

  ngOnInit(){
    if(this.authService.IsExistsToken('my-token')){
      this.router.navigateByUrl('/console').then()
    }
  }
  login(){
    if(this.email==="h@gmail.com" && this.password==='123'){
      this.authService.createToken(this.email)
        this.router.navigateByUrl('/console').then()
    }else {
      alert("wrong password")
    }
  }
}
