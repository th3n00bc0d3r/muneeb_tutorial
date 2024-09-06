import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private frmBuilder: FormBuilder,
    private _http: HttpClient
  ) {

    //Login
    this.loginForm = this.frmBuilder.group({
      email:    [''],
      pass:    [''],
    });    
  }

  onLogin() {
    console.log("Form Data", this.loginForm.value);
    this._http.post("http://localhost:3000/login", this.loginForm.value)
      .subscribe(
        (res: any) => {
          console.log("Response", res);
        },
        (err: any) => {
          console.log("Error", err);
        },
      );
  }

  resetForm() {
    this.loginForm.reset();
  }

}
