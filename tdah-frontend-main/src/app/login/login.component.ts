// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthServiceService ,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   onSubmit() {
    
  const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');
   

    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;

      

     
      this.authService.login(username, password);
    }
  }
}
