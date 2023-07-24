import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})

export class PersonalPageComponent {
  currentDate: (number | string) = Date.now();
  price: number = 1000;
  discount: number = 0.10;
  switcher: boolean = true;
  selectedTransport: 'car' | 'plane' | 'ship' = 'ship';
}
