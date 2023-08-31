import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm  from 'app/helpers/validateform';
import { AuthService } from 'app/services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin = true;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private logService:AuthService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe:['']
    })
  }
  loginSignup(flag: boolean) {
    this.showLogin = flag;
  }
  onLogin() { 
    if (this.loginForm.valid) {
      //login
      this.logService.login(this.loginForm.value).subscribe({
        next:(res)=>{ 
          debugger
          console.log(res.message); 

          ValidateForm.ShowMessage(res);
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        },error:(err)=>{
          debugger
          ValidateForm.ShowMessage(err.error);
        }
      })  
      console.log(this.loginForm.value); 
    }
    else {
      console.log('form is not valid');
      ValidateForm.validateAllFormFileds(this.loginForm);
      //error
    }
  } 
}
