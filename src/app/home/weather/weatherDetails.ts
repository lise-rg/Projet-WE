export interface WeatherDetails {
  request:  Request;
  location: Location;
  current:  Current;
}

export interface Current {
  observationTime:     string;
  temperature:         number;
  weatherCode:         number;
  weatherIcons:        string[];
  weatherDescriptions: string[];
  windSpeed:           number;
  windDegree:          number;
  windDir:             string;
  pressure:            number;
  precip:              number;
  humidity:            number;
  cloudcover:          number;
  feelslike:           number;
  uvIndex:             number;
  visibility:          number;
}

export interface Location {
  name:           string;
  country:        string;
  region:         string;
  lat:            string;
  lon:            string;
  timezoneID:     string;
  localtime:      string;
  localtimeEpoch: number;
  utcOffset:      string;
}

export interface Request {
  type:     string;
  query:    string;
  language: string;
  unit:     string;
}
