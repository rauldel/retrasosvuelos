import { Component, OnInit } from '@angular/core';

import {
  AgmCoreModule
} from '@agm/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  /**
   * Se ha usado esto: https://angular-maps.com/guides/getting-started/
   */
  lat: number = 39.4867634;
  lng: number = -0.4492538;
  zoom: number = 17;
  tipoMapa: string = "hybrid";

  constructor() { }

  ngOnInit() {
  }

}
