import { Component, OnInit } from '@angular/core';

import { Usuario } from '../models/usuario';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  currentUser: Usuario;
  users: Usuario[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe( () => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe( users => { this.users = users; });
  }

}
