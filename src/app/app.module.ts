import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { CarComponent } from './car/car.component';
import { PlaneComponent } from './plane/plane.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    CarComponent,
    PlaneComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
