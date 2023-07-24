import { Component } from '@angular/core';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
})
export class PlaneComponent {
  planeBrand: string = 'Mria';
  planeModel: string = 'AN-225';
  showPlane: boolean = false;
  imgPlane: string = 'assets/mria.jpg'
}
