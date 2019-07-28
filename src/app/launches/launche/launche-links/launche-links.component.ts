import { Component, OnInit, Input } from "@angular/core";

import { ITabs } from "./../../../shared/interfaces/launches";
import { ILinks } from "./../../../shared/interfaces/launches";

@Component({
  selector: "app-launche-links",
  templateUrl: "./launche-links.component.html",
  styleUrls: ["./launche-links.component.css"]
})
export class LauncheLinksComponent implements OnInit {
  constructor() {}

  @Input() links: ILinks;

  tabs: ITabs = {
    images: [],
    articles: [],
    video: []
  };

  ngOnInit() {
    this.addTabs();
  }

  addTabs() {
    for (let obj in this.links) {
      if (this.links[obj] !== null) {
        if (obj === "flickr_images") {
          this.tabs.images = this.links[obj];
        }

        if (obj === "wikipedia" || obj === "article_link") {
          this.tabs.articles.push(this.links[obj]);
        }

        if (obj === "video_link") {
          this.tabs.video.push(this.links["youtube_id"]);
        }
      }
    }

    // tabs = null if no links
    if (
      this.tabs.images.length == 0 &&
      this.tabs.articles.length == 0 &&
      this.tabs.video.length == 0
    )
      this.tabs = null;
  }

  showTab() {}

  //   article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html"
  // flickr_images: []
  // mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png"
  // mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
  // presskit: null
  // reddit_campaign: null
  // reddit_launch: null
  // reddit_media: null
  // reddit_recovery: null
  // video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88"
  // wikipedia: "https://en.wikipedia.org/wiki/DemoSat"
  // youtube_id: "0a_00nJ_Y88"
}
