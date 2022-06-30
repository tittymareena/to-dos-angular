import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {Passwordvalidator} from '../services/customvalidator.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';

  constructor(
    private router:Router,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
                         email: ["",[Validators.required,Validators.email,]],
                         password: ["",[Validators.required,Passwordvalidator.oddNumberOfS]]
                        })
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
    //     '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
    //   ),]),
    //   // password: new FormControl('', [Validators.required,Validators.pattern(
    //   //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    //   // )]
    //   password: new FormControl('', [Validators.required,Validators.pattern(
    //     '^[^a]*a(?=[^a]*(?:a[^a]*a)*[^a]*$).*$'
    //   )]
    //   )
    // });
   }
  hide = true;
  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }

    localStorage.setItem('user',this.loginForm.value.email)
    this.router.navigate(['/to-do']);
  }
}
