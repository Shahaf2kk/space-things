import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor() {
    this.initKeys();
  }

  keys_types: {
    key: string,
    type: string
  }[];

  keys: Array<string> = [];
  types: Array<string> = [];

  getKeys_types(): Array<{key: string; type: string}> {
    return this.keys_types;
  }

  getKeys(): Array<string> {
    return this.keys;
  }

  getTypes(): Array<string> {
    return this.types;
  }


  private initKeys() {

    this.keys_types = this.chooseKeys();

    this.keys_types.forEach(key => {
      this.keys.push(key.key);
      this.types.push(key.type);
    });

  }



  private chooseKeys() {
    return [
      {
        key: 'flight_number',
        type: 'Number'
      },
      {
        key: 'mission_name',
        type: 'string'
      },
      {
        key: 'upcoming',
        type: 'boolean'
      },
      {
        key: 'launch_year',
        type: 'Date'
      },
      {
        key: 'launch_success',
        type: 'boolean'
      },
      {
        key: 'links',
        type: 'boolean'
      },
      {
        key: 'crew',
        type: 'boolean'
      },
    ];
  }
}

  //   this.flight_number = null;
  //   this.mission_name = null;
  //   this.mission_id = [];
  //   this.upcoming = null;
  //   this.launch_year = null;
  //   this.launch_date_unix = null;
  //   this.launch_date_utc = null;
  //   this.launch_date_local = null;
  //   this.is_tentative = null;
  //   this.tentative_max_precision = null;
  //   this.tbd = null;
  //   this.launch_window = null;
  //   this.rocket = new Rocket().createEmpty();
  //   this.ships = null;
  //   this.telemetry = null;
  //   this.launch_site = new LaunchSite().createEmpty();
  //   this.launch_success = null;
  //   this.launch_failure_details = new LaunchFailureDetails().createEmpty();
  //   this.links = new Links().createEmpty();
  //   this.details = null;
  //   this.static_fire_date_utc = null;
  //   this.static_fire_date_unix = null;
  //   this.timeline = null;
  //   this.crew = null;

