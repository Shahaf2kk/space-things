import { Component, OnInit, Input } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "app-youtube-videos",
  templateUrl: "./youtube-videos.component.html",
  styleUrls: ["./youtube-videos.component.css"]
})
export class YoutubeVideosComponent implements OnInit {
  @Input() youtubeSrc: string;
  safeSrc: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + this.youtubeSrc
    );
  }
}
