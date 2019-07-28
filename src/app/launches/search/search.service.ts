import { Injectable } from '@angular/core';
import { IKeys_Types } from 'src/app/shared/interfaces/launches';
import { SpacexApiCallsService } from 'src/app/shared/api-services/spacex-api-calls.service';
import { Rocket } from 'src/app/shared/model/rocket';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private spaceXApi: SpacexApiCallsService) {
    this.initKeys();
    this.getRockets();
  }

  keys_types: IKeys_Types[];

  keys: Array<string> = [];
  types: Array<string> = [];

  getKeys_types(): IKeys_Types[] {
    return this.keys_types;
  }

  getKeys(): Array<string> {
    return this.keys;
  }

  getTypes(): Array<string> {
    return this.types;
  }

  getRockets() {
    this.spaceXApi.getRockets().subscribe((data: Rocket[]) => {
      this.initRocket(data);
    }, error => console.log(error));
  }

  initRocket(rockets: Rocket[]) {
    for (let i = 0; i < this.keys_types.length; i++) {
      if(this.keys_types[i].key == 'rocket') {
        this.keys_types[i].default_value = rockets;
        return;
      }

    }
  }


  private initKeys() {

    this.keys_types = this.chooseKeys();

    this.keys_types.forEach(key => {
      this.keys.push(key.key);
      this.types.push(key.type);
    });

  }



  private chooseKeys(): IKeys_Types[] {
    return [
      {
        key: 'flight_number',
        type: 'Number',
        default_value: null
      },
      {
        key: 'mission_name',
        type: 'string',
        default_value: null
      },
      {
        key: 'upcoming',
        type: 'boolean',
        default_value: false,
      },
      {
        key: 'launch_year',
        type: 'Date',
        default_value: null
      },
      {
        key: 'launch_success',
        type: 'boolean',
        default_value: false
      },
      {
        key: 'links',
        type: 'boolean',
        default_value: false
      },
      {
        key: 'rocket',
        type: 'select',
        default_value: []
      }

      // {
      //   key: 'crew',
      //   type: 'boolean',
      //   default_value: false
      // },
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

