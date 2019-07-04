import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

import { SearchComponent } from './../search/search.component';

import { LaunchesService } from './../launches.service';
import { Launche } from 'src/app/shared/model/launche';
import { SearchService } from '../search/search.service';
import { IKeys_Types } from 'src/app/shared/interfaces/launches';


@Component({
  selector: 'app-launche-list',
  templateUrl: './launche-list.component.html',
  styleUrls: ['./launche-list.component.css']
})
export class LauncheListComponent implements OnInit, AfterViewInit {

  constructor(
    private launchesService: LaunchesService,
    private searchService: SearchService
    ) { }

  @ViewChild(SearchComponent, { static: false}) searchRes;

  launches: Launche[];
  resultSearchLaunches: Launche;
  keys: string[];
  keys_types: IKeys_Types[];



  ngOnInit() {
    this.loadLaunches();
    this.keys = this.searchService.getKeys();
    this.keys_types = this.searchService.getKeys_types();
  }

  ngAfterViewInit(): void {
    this.showSearchRes();
  }

  loadLaunches() {
    if(this.launchesService.hasLaunches()) {
      this.launches = this.launchesService.getLaunches();
      return;
    }
    this.launchesService.getLaunchesArray().subscribe((data: Launche[]) => {
      this.launches = data;
      this.launchesService.setLaunches(data);
    }, error => console.error(error));
  }

  showSearchRes() {
    this.searchRes.quertFieldGroup.valueChanges.subscribe((res: Launche) => {
      console.log(res);
      this.resultSearchLaunches = res;
      if(this.findSearchResultHasValues(res)) {
      } else this.resultSearchLaunches = null;
    });
  }

  // for skip the pipe in the entry if has no value.
  findSearchResultHasValues(res: Launche): boolean {

    for (let i  = 0; i < this.searchRes.keys.length; i++) {
      const _obj = res[this.searchRes.keys[i]];
      if(_obj != null && _obj != undefined && _obj != '' ) return true;
    }

    return false;
  }

}
