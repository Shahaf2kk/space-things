import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Global } from '../../globals/global';
import { ILaunche } from './../interfaces/launches';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpacexApiCallsService {

  constructor(private http: HttpClient,
              private global: Global) { }

  private base_url = this.global.SpaceXGlobal.BASE_API_URL;

  getLaunches(): Observable<Array<ILaunche>> {
    return this.http.get<Array<ILaunche>>(this.base_url + 'launches');
  }
}
