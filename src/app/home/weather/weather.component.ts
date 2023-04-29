import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Current, Location, WeatherDetails} from "./weatherDetails";
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

      // here we reset the data manually
      // only because of restricted access problems with Weatherstack
      this.setData();
    });
  }

  fetchDetails() : Observable<WeatherDetails> {
    const params = {
      access_key: '1cd221fbd9ab168d7cf1373ac77edc33',
      query: "Rennes"
    }
    return this.httpClient.get<WeatherDetails>('https://api.weatherstack.com/current', {params});
  }

  setData() {
    let current : Current = {
      cloudcover: 0,
      feelslike: 11,
      humidity: 76,
      observationTime: "21h",
      precip: 2,
      pressure: 1020,
      temperature: 16,
      uvIndex: 0,
      visibility: 0,
      weatherCode: 0,
      weatherDescriptions: ["Cloudy"],
      weatherIcons: [],
      windDegree: 0,
      windDir: "",
      windSpeed: 11
    }

    let location : Location = {
      country: "France",
      lat: "",
      localtime: "",
      localtimeEpoch: 0,
      lon: "",
      name: "Rennes",
      region: "Bretagne",
      timezoneID: "",
      utcOffset: ""
    }

    this.details = {
      current: current,
      location: location,
      request: undefined
    }
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
