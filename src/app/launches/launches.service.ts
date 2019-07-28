import { Launche } from "./../shared/model/launche";
import { Injectable } from "@angular/core";
import { SpacexApiCallsService } from "../shared/api-services/spacex-api-calls.service";

@Injectable({
  providedIn: "root"
})
export class LaunchesService {
  constructor(private api: SpacexApiCallsService) {}

  launches: Launche[];

  hasLaunches() {
    return this.launches ? true : false;
  }
  getLaunches() {
    return this.launches;
  }

  setLaunches(launches: Launche[]) {
    this.launches = launches;
  }

  getLaunchesArray() {
    return this.api.getLaunches();
  }
}
