import { Component, OnInit } from '@angular/core';

import { AlertasService } from '../services/alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  //Variable mensaje que contiene la info de la alerta.
  message : any;

  constructor(private alertasService : AlertasService) { }

  ngOnInit() {
    this.alertasService.getMessage().subscribe(message => { this.message = message });
  }

}
