import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url: string = 'http://localhost:8080';
  constructor(private hotel:HttpClient) { }

  lista(): Observable<any>{
    let endpoint = "/buscarhabitaciones"
    let uri:string = this.url + endpoint
    return this.hotel.get(uri) 
  }
}
