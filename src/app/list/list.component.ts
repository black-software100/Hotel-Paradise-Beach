import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../Services/reservas.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  Reservas:any
  constructor(private _serviciosR:ReservasService) { }

  ngOnInit() {
    this._serviciosR.lista().subscribe({
      next:(data)=>{
        console.log(data.reservas)
        this.Reservas = data.reservas
      },error:(err)=>{
        console.log(err)
      }
     })
  }

}
