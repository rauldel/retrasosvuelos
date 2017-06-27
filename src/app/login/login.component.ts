import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logueado = false;

  form = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.logueado = this.userService.isLogueado();
  }

  OnSubmit(jsonForm: any) {
    console.log(jsonForm);
    
    console.log(jsonForm.email);

    let email : string = jsonForm.email;
    let password : string = jsonForm.password;

    if(email.length > 0 && password.length > 0){
      this.userService.usuario = email;
      this.userService.contrasenya = password;
      this.userService.logueado = true;
    }

    console.log("Salimos...");
  }
}
