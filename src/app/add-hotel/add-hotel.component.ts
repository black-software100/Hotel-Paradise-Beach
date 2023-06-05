import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HotelInterface } from '../Interface/hotel-interface';
import { HotelService } from '../Services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss'],
})
export class AddHotelComponent  implements OnInit {
  public formReserva:FormGroup;
  constructor(private _form:FormBuilder, private reserva:HotelService ) {
    this.formReserva = _form.group({
      nombre:[''],
      foto:[''],
      descripcion:[''],
      precioNoche:[''],
      cantidadMaximo:[''],
    })
   }
   guardar(){
    const model:HotelInterface = {
      nombre: this.formReserva.value.nombre,
      foto: this.formReserva.value.foto,
      descripcion: this.formReserva.value.descripcion,
      precioNoche: parseInt(this.formReserva.value.precioNoche),
      cantidadMaximo: parseInt(this.formReserva.value.cantidadMaximo) 
    }
    this.reserva.add(model).subscribe({
      // next:(data)=>{
      //   console.log(data);
      // }, error:(err)=>{
      //   console.log(err)
      // }
    })
    console.log(model)
   }
  ngOnInit() {}


}
