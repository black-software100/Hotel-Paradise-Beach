import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservaInterfas } from '../Interface/reserva-interfas';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  url: string = 'https://test-api-lovat-alpha.vercel.app/';
  constructor(private reservas:HttpClient) { }

  lista(): Observable<any>{
    let   endpoint = "/buscarreservas"
    let uri:string = this.url + endpoint
    return this.reservas.get(uri) 
  }

  add(modelo:ReservaInterfas): Observable<any>{
    let endpoint = "/registrarreserva"
    let uri:string = this.url + endpoint
    return this.reservas.post(uri, modelo) 
  }
}
