import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logueado = false;
  nombre = '';

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.logueado = this.userService.isLogueado();
    this.nombre = this.userService.usuario;
  }

}
