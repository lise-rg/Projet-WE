import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherDetails } from "./weatherDetails";
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  details: WeatherDetails | undefined;
  constructor(public httpClient: HttpClient) {}
  getWeather() {
    this.fetchDetails().subscribe(data => {
      this.details = data;
      console.log(data);
      console.log(`Current temperature in ${data.location.name} is ${data.current.temperature}℃`);
    });
  }

  fetchDetails() : Observable<WeatherDetails> {
    const params = {
      access_key: '1cd221fbd9ab168d7cf1373ac77edc33',
      query: "Paris"
    }

    return this.httpClient.get<WeatherDetails>('https://api.weatherstack.com/current', {params});
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
