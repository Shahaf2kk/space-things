import { PictureOfTheDay } from './../shared/model/picture-of-the-day';
import { Component, OnInit } from '@angular/core';
import { NasaAPICallsService } from '../shared/api-services/nasa-api-calls.service';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.css']
})
export class PicOfTheDayComponent implements OnInit {

  pictureOfTheDay: PictureOfTheDay;

  constructor(
    private api: NasaAPICallsService
    ) { }

  ngOnInit() {
    this.getPicture();

  }
  getPicture() {
    if(!this.pictureOfTheDay) {
      this.api.getPictureOfTheDay().subscribe((data) => {


//         date: "2019-06-30"
//         explanation: "What would it be like to fly over the asteroid Vesta? Animators from the German Aerospace Center took actual images and height data from NASA's Dawn mission when it visited asteroid Vesta a few years ago and generated a virtual movie. The featured video begins with a sequence above Divalia Fossa, an unusual pair of troughs running parallel over heavily cratered terrain. Next, the virtual spaceship explores Vesta's 60-km Marcia Crater, showing numerous vivid details. Last, Dawn images were digitally recast with exaggerated height to better reveal Vesta's 5-km high mountain Aricia Tholus. The second largest object in the Solar System's asteroid belt, Vesta is the brightest asteroid visible from Earth and can be found with binoculars.  Using Vesta Trek, you can explore all over Vesta yourself.   Every June 30: Today is Asteroid Day"
//         media_type: "video"
//         service_version: "v1"
//         title: "Virtual Flight over Asteroid Vesta"
//         url: "https://www.youtube.com/embed/YYxPw_T8Vlk"


        this.pictureOfTheDay = new PictureOfTheDay();

        this.pictureOfTheDay.copyright = data["copyright"];
        this.pictureOfTheDay.explanation = data["explanation"];
        this.pictureOfTheDay.date = data["date"];
        this.pictureOfTheDay.hdurl = data["hdurl"];
        this.pictureOfTheDay.title = data["title"];
        this.pictureOfTheDay.url = data["url"];

      }, error => console.log(error));
    }
  }

}
