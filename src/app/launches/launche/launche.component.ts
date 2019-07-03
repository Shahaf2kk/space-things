import { Component, OnInit, Input } from '@angular/core';

import { Launche } from './../../shared/model/launche';
import { LaunchesService } from './../launches.service';

@Component({
  selector: 'app-launche',
  templateUrl: './launche.component.html',
  styleUrls: ['./launche.component.css']
})
export class LauncheComponent implements OnInit {

  constructor() { }

  @Input() launche: Launche;

  @Input() preview: boolean;

  now: Date = new Date();
  launcheTime: Date;

  ngOnInit() {

    this.launcheTime = new Date(this.launche.launch_date_utc);

  }
  changePreview() {
    this.preview = !this.preview;
  }






}
