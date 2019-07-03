import { Pipe, PipeTransform } from '@angular/core';

import { Launche } from './../model/launche';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(launcheValue: Launche[], launcheSearch?: Launche, keys?: Array<any>): any {
    if(!launcheSearch || !keys) return launcheValue;

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



      let key_includes = 0;

      keys.forEach(key_name => {
        if(key_name == 'flight_number') return;

        let _value: any = el_value[key_name];
        let _search: any = launcheSearch[key_name];

        // if(!isNaN(_value) || !isNaN(_search)) return; //   retrun if is number
        if(_value == null || _value == undefined || _value == null) return;
        if(_search == '' || _search == null || _search == undefined || _search == ' ') return;

        _value = _value.toLowerCase();
        _search = _search.toLowerCase();


        if(!_value.includes(_search)) return;

        key_includes++;
      });

      if(key_includes > 0) result.push(el_value);
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
