import { IKeys_Types } from 'src/app/shared/interfaces/launches';
import { Pipe, PipeTransform } from '@angular/core';

import { Launche } from './../model/launche';
import { isNull } from 'util';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(launcheValue: Launche[], launcheSearch?: Launche, keys?: IKeys_Types[]): any {
    if(!launcheSearch || !keys || !launcheValue) return launcheValue;

    let result: Launche[] = [];

    for (let i = 0; i < launcheValue.length; i++) {
      const el_value = launcheValue[i];

      /// flight_number only
        if(launcheSearch.flight_number > 0 && launcheSearch.flight_number != null && launcheSearch.flight_number != undefined) {
          if(el_value.flight_number == launcheSearch.flight_number) {
            result = [];
            result.push(el_value);
            return result;
          }
        if(i == launcheValue.length - 1) return result;
        continue;
      }
      /// flight_number only end



      let key_match = true;

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        let _value: any = el_value[key.key];
        let _search: any = launcheSearch[key.key];

        if(key.key === 'flight_number') continue;
        if(_search === null || _search === undefined || _search === '') continue;

        if(key.type === 'string') {

          _value = _value.toLowerCase();
          _search = _search.toLowerCase();

          if(_value.includes(_search)) continue;
          else key_match = false;

        }
        // boolean types
        else if(key.type === 'boolean') {
          _search = _search === 'true' ? true : false;

          if(key.key === 'links') {

            if(_value.article_link == null && !_search || _value.article_link != null && _search) continue;
            else key_match = false;

          }
        }
        // rocket id
        else if(key.key === 'rocket') {

            if(_value.rocket_id == _search) continue;
            else key_match = false;
        }
      }

      if(key_match) result.push(el_value);
    }


    return result;
  }
}


// /   0: "flight_number"
// 1: "mission_name"
// 2: "mission_id"
// 3: "upcoming"
// 4: "launch_year"
// 5: "launch_date_unix"
// 6: "launch_date_utc"
// 7: "launch_date_local"
// 8: "is_tentative"
// 9: "tentative_max_precision"
// 10: "tbd"
// 11: "launch_window"
// 12: "rocket"
// 13: "ships"
// 14: "telemetry"
// 15: "launch_site"
// 16: "launch_success"
// 17: "launch_failure_details"
// 18: "links"
// 19: "details"
// 20: "static_fire_date_utc"
// 21: "static_fire_date_unix"
// 22: "timeline"
// 23: "crew"
