import { SearchComponent } from './../search.component';
import { Component, OnInit, Input, AfterViewInit, Host } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {

  @Input() controlName: string;
  @Input() placeHolder: string;
  @Input() group: string;
  @Input() value: any;
  @Input() type: string;

  constructor(
    ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

  // changeTime() {
  //   if(this.type === 'Date') {
  //     this.myDate = new Date('2016').getFullYear();
  //     console.log(this.myDate);
  //   }
  // }
}

//   0: "flight_number"
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
// length: 24

