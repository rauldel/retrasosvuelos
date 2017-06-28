import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { AlertasService} from '../services/alertas.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*logueado = false;

  form = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });*/
  model: any = {};
  loading = false;
  returnUrl: string;

  /* Constructor original
  constructor(private userService: UserService) { } */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertasService: AlertasService) { }

  ngOnInit() {
    //Reseteamos el estado del login
    this.authenticationService.logout();

    //Obtenemos la URL de redirección de los parametros de la ruta o lo definimos al raíz
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertasService.error(error);
          this.loading = false;
        }
      );
  }

  /* Este es el método original (sin funcar) del puterrimo submit.
  OnSubmit(jsonForm: any) {
    console.log(jsonForm);
    
    console.log(jsonForm.email);

    let email : string = jsonForm.email;
    let password : string = jsonForm.password;

    if(email.length > 0 && password.length > 0){
      console.log("juas ->");
    }

    console.log("Salimos...");
  }
  */
}
