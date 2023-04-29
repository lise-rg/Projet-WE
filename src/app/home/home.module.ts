import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import {WeatherComponent} from "./weather/weather.component";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    WeatherComponent
  ],
  exports: [
    WeatherComponent
  ],
  providers: [
  ]
})
export class HomeModule {}
