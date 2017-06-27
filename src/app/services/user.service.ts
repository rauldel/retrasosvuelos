import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  usuario = '';

  contrasenya = '';

  logueado = false;

  constructor() { }

  getUsuario() : string {
    return this.usuario;
  }

  isLogueado() : boolean {
    return this.logueado;
  }

}
