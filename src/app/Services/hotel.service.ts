import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HotelInterface } from '../Interface/hotel-interface';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url: string = 'https://test-api-lovat-alpha.vercel.app';
  constructor(private hotel:HttpClient) { }

  lista(): Observable<any>{
    let endpoint = "/buscarhabitaciones"
    let uri:string = this.url + endpoint
    return this.hotel.get(uri) 
  }
  add(model:HotelInterface): Observable<any>{
    let endpoint = "/registrarhabitacion"
    let uri:string = this.url + endpoint
    return this.hotel.post(uri,model)
  }
}
