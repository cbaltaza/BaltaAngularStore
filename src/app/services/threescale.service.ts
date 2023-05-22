import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ThreescaleService {

  constructor(
    private http: HttpClient
  ) {  }

  getRequest(){

    return  this.http.get<Product>('https://api-2445584190275.staging.gw.apicast.io:443/?user_key=0981564e88cc649db607d29163d941ae');
  }
}
