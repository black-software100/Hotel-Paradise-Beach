import { Component, OnInit } from '@angular/core';
import { HotelService } from '../Services/hotel.service';
@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss'],
})
export class HabitacionComponent  implements OnInit {
  Habitaciones:any
  constructor(private _hotel:HotelService) { }
  
  
  ngOnInit() {
    this._hotel.lista().subscribe({
      next:(data)=>{
        console.log(data.Habitaciones);
        this.Habitaciones = data.Habitaciones
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
