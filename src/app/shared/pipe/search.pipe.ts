import { IKeys_Types } from 'src/app/shared/interfaces/launches';
import { Pipe, PipeTransform } from '@angular/core';

import { Launche } from './../model/launche';
import { isNull } from 'util';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(launcheValue: Launche[], launcheSearch?: Launche, keys?: IKeys_Types[]): any {
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



      let key_match = true;

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if(key.key === 'flight_number') continue;

        let _value: any = el_value[key.key];
        let _search: any = launcheSearch[key.key];
        if(_search === null || _search === undefined || _search === '') continue;

        if(key.type === 'string') {


          _value = _value.toLowerCase();
          _search = _search.toLowerCase();
          if(_value.includes(_search)) {
            continue;
          } else {
            key_match = false;
          }
        }
        // boolean types
        else if(key.type === 'boolean') {
          _search = _search === 'true' ? true : false;

          if(key.key === 'links') {

            if(_value.article_link == null && !_search || _value.article_link != null && _search) continue;
            else key_match = false;

          }

          // if(key.key === 'crew') {
          //   // console.log(isNull(_value));
          //   // console.log(_value, _search);
          //   if(isNull(_value.crew) && !_search || !isNull(_value.crew) && _search) {
          //     if(_value.crew.length > 0) continue;
          //   }
          //   else key_match = false;

          // }
          if(_search === _value) {
            continue;
          } else {
            key_match = false;
          }
        }

        else if(key.type === 'Date') {
          console.log(_value, _search);
        }


      }
      // keys.forEach(key_name => {
      //   if(key_name.key === 'flight_number') return;


        // console.log(_value, _search);

        // if(!isNaN(_value) || !isNaN(_search)) return; //   retrun if is number
        // if(_search == '' || _search == null || _search == undefined || _search == ' ') return;

        // strings
        // if(key_name.type === 'string') {
        //   if(_search == null || _search == undefined) return;
        //   // if(_value == null || _value == undefined || _value == null ||

        //   _value = _value.toLowerCase();
        //   _search = _search.toLowerCase();
        //   if(!_value.includes(_search)) {
        //     key_match = false;
        //   }

        // }
        // boolean
        // else if(key_name.type === 'boolean') {
        //   // _search = Boolean(_search);/
        //   console.log(_search == _value);
        //   if(_search != _value) return;
        // }
          // console.log(key_name.key, _value, _search);


      // });

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
