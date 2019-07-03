import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import { Launche } from 'src/app/shared/model/launche';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  launches: Launche[];

  quertFieldGroup: FormGroup;

  keys_types: Array<any>
  keys: Array<string>;
  types: Array<string>;


  ngOnInit() {
    this.quertFieldGroup = new FormGroup({});
    this.keys = this.searchService.getKeys();

    this.addControlls(this.keys);
    this.keys_types = this.searchService.getKeys_types();
    // this.keys = this.searchService.initKeys();
  }

  addControlls(keys: Array<any>) {
    keys.forEach( el => {
        this.quertFieldGroup.addControl(el, this.createControl());
    });
  }


  createControl(): FormControl {
    return new FormControl();
  }

  resetValues() {
    this.quertFieldGroup.reset();
  }

}
