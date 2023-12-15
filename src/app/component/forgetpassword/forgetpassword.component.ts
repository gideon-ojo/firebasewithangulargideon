import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service'
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {
  email: string = ''
constructor(private auth : AuthService) { }
ngOnInit() : void{

}

 forgotPassword(){
   this.auth.forgetPassword(this.email);
    this.email = '';
   
 }

}