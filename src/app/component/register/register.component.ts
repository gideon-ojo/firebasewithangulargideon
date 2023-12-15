import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  faGoogle = faGoogle


  constructor(private auth : AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void{

  }
  register(){
    console.log(this.email)
  if (this.email = ''){
      alert('please enter email');
      return
    }
    if (this.password = ''){
      alert('please enter password');
     return
   }
  //   this.auth.register(this.email, this.password);
  //  this.email = '';
  //   this.password = '';  
  this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then((response)=>{
    console.log(response)
  })
  }
}
