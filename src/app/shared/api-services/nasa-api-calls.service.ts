import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,  } from '@angular/common/http';

import { Global } from '../../globals/global';

@Injectable({
  providedIn: 'root'
})

export class NasaAPICallsService {

  constructor(
              private global: Global,
              private http: HttpClient
              ) { }

  private baseUrl = this.global.NasaGlobal.BASE_API_URL;
  private api_key = this.global.NasaGlobal.API_KEY;

  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  getPictureOfTheDay() {
    return this.http.get(this.baseUrl + 'apod?' + 'api_key=' + this.api_key, {
            headers: this.headers,
    });
  }


}
