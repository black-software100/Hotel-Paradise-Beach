import { ReservaInterfas } from './../Interface/reserva-interfas';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ReservasService } from '../Services/reservas.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent  implements OnInit {
  public formReserva:FormGroup;
  id:any
  constructor(private _form:FormBuilder, private _reserva:ReservasService, private _id:ActivatedRoute, private deolverse:Router) { 
    this.id = this._id.snapshot.paramMap.get('id');
    
    this.formReserva = _form.group({
      nombre:[''],
      apellido:[''],
      telefono:[''],
      fechaInicio:[''],
      fechaFinal:[''],
      numeroPersona:[''],
    })
  }
  
  ngOnInit() {}
  guardar(){
    const modelo:ReservaInterfas = {
      idHabitacion: this.id,
      nombre: this.formReserva.value.nombre,
      apellido: this.formReserva.value.apellido,
      fechaInicio: this.formReserva.value.fechaInicio,
      fechaFinal: this.formReserva.value.fechaFinal,
      numeroPersona: parseInt(this.formReserva.value.numeroPersona) ,
      telefono: parseInt(this.formReserva.value.telefono) 
    }
    this._reserva.add(modelo).subscribe({
      next:(data)=>{
        console.log(data)
      },error:(err)=>{
        console.log(err)
      }
    })
    console.log(modelo)
  }
  
  atras(){
  this.deolverse.navigate(['home/habitacion'])
  }
}
