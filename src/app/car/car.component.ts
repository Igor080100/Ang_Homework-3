import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent {
  carBrand: string = 'ZaZ';
  carModel: string = 'Tavria';
  showCar: boolean = false;
  imgCar: string = 'assets/tavria.jpg'
}

