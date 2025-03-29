import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { } //created object of http client

 getProduct()
 {
  return this.http.get('https://fakestoreapi.com/products')
 }
 getProductById(id:string)
 {
  return this.http.get(`https://fakestoreapi.com/products/${id}`) //` not '
 }
}
