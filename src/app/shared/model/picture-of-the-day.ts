import { IPictureOfTheDay } from "../interfaces/picture-of-the-day";

export class PictureOfTheDay implements IPictureOfTheDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}

