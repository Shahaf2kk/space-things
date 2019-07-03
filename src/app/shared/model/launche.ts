import { ILaunche, ILaunchSite, ILinks, ILaunchFailureDetails } from './../interfaces/launches';
import { IRocket } from '../interfaces/rocket';
import { Rocket } from './rocket';

export class Launche implements ILaunche {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: Date;
  launch_date_local: Date;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: IRocket;
  ships: any[];
  telemetry: object;
  launch_site: ILaunchSite;
  launch_success: boolean;
  launch_failure_details: ILaunchFailureDetails;
  links: ILinks;
  details: string;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  timeline: object;
  crew: object;

  createEmpty() {
    this.flight_number = null;
    this.mission_name = null;
    this.mission_id = [];
    this.upcoming = null;
    this.launch_year = null;
    this.launch_date_unix = null;
    this.launch_date_utc = null;
    this.launch_date_local = null;
    this.is_tentative = null;
    this.tentative_max_precision = null;
    this.tbd = null;
    this.launch_window = null;
    this.rocket = new Rocket().createEmpty();
    this.ships = null;
    this.telemetry = null;
    this.launch_site = new LaunchSite().createEmpty();
    this.launch_success = null;
    this.launch_failure_details = new LaunchFailureDetails().createEmpty();
    this.links = new Links().createEmpty();
    this.details = null;
    this.static_fire_date_utc = null;
    this.static_fire_date_unix = null;
    this.timeline = null;
    this.crew = null;

    return this;
  }
  // createForSearch() {
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

  //   return this;
  // }
}

export class LaunchFailureDetails implements ILaunchFailureDetails {
  time: number;  altitude: string;
  reason: string;

  createEmpty() {
    this.time = null;
    this.altitude = null;
    this.reason = null;

    return this;
  }


}
export class LaunchSite implements ILaunchSite {
  site_id: string;  site_name: string;
  site_name_long: string;

  createEmpty() {
    this.site_id = null;
    this.site_name = null;
    this.site_name_long = null;

    return this;
  }
}

export class Links implements ILinks {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_recovery: string;
  reddit_media: string;
  presskit: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: any[];

  createEmpty() {
    this.mission_patch = null;
    this.mission_patch_small = null;
    this.reddit_campaign = null;
    this.reddit_launch = null;
    this.reddit_recovery = null;
    this.reddit_media = null;
    this.presskit = null;
    this.article_link = null;
    this.wikipedia = null;
    this.video_link = null;
    this.youtube_id = null;
    this.flickr_images = null;

    return this;
  }
}


