import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {

  form = new FormGroup({
    numVuelo: new FormControl("", [Validators.required]),
    fecha: new FormControl("", [Validators.required])
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  OnSubmit(jsonForm: any) {
    console.log("Buscamos algo...")
  }

}
