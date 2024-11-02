import { Component } from '@angular/core';
import { BannerComponent } from '@shared/componets/banner/banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  habitaciones = [
    {
      src: 'habitacion1.jpg',
    },
    {
      src: 'habitacion2.jpg',
    },
  ];
  habitaciones1 = [
    {
      src: 'habitacion3.jpg',
    },
    {
      src: 'habitacion4.jpg',
    },
  ];
}
