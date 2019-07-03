import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {
  NasaGlobal = new NasaGlobal();
  SpaceXGlobal = new SpaceXGlobal();
}
export class NasaGlobal {
  BASE_API_URL = 'https://api.nasa.gov/planetary/';
  API_KEY = 'yI8ah3P6pWJzqQMAdxGfnWP3fjWypUV79B7yiYEc'
}

export class SpaceXGlobal {
  BASE_API_URL = 'https://api.spacexdata.com/v3/';
}

