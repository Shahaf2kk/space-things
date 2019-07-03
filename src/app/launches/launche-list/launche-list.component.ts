import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { SearchComponent } from './../search/search.component';

import { LaunchesService } from './../launches.service';
import { Launche } from 'src/app/shared/model/launche';
import { SearchService } from '../search/search.service';


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



  ngOnInit() {
    this.loadLaunches();
    this.keys = this.searchService.getKeys();
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
      if(this.findSearchResultHasValues(res)) {
        this.resultSearchLaunches = res;
      } else this.resultSearchLaunches = null;
    });
  }

  findSearchResultHasValues(res: Launche): boolean {

    for (let i  = 0; i < this.searchRes.keys.length; i++) {
      const _obj = res[this.searchRes.keys[i]];
      if(_obj != null && _obj != undefined && _obj != '' ) return true;
    }

    return false;
  }

}
