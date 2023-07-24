import { Component } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
})
export class ShipComponent {
  shipBrand: string = 'Cruiser';
  shipModel: string = 'Star Destroyer';
  showShip: boolean = false;
  imgShip: string = 'assets/Destroyer.jpg'
}
