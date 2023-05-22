import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Headersscale } from "../models/headers.model";
import { ThreescaleService } from '../services/threescale.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss']
})
export class ComponentesComponent implements OnInit {

  @Input() respuesta: Product = {
    method: '',
    path: '',
    body: '',
    headers: '',
    uuid: '',
    bodySha1: '',
    bodyLength: ''
  };

  constructor(private datoServicio: ThreescaleService) {

  }

  ngOnInit(): void {
    this.datoServicio.getRequest()
    .subscribe(data => {
      console.log(data);
      this.respuesta = data;
    })

  }


}
