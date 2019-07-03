import { IRocket } from './rocket';

export interface IKeys_Types {
  key: string;
  type: string;
  default_value: any;
}

export interface ILaunche {
  flight_number: number;
  mission_name: string;
  mission_id: Array<any>;
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
  ships: Array<any>;
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
}

export interface ILaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}
export interface ILaunchFailureDetails {
  time: number;
  altitude: string;
  reason: string;
}

export interface ILinks {
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
  flickr_images: Array<any>;
}

export interface ITabs {
  images: Array<string>;
  articles: Array<string>;
  video: Array<string>;
}
