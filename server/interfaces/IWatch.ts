import { Document } from "mongoose";

interface ISeries {
  title: string;
  episodeLink: string; 
}

export interface IWatch extends Document {
  image: string;
  title: string;
  genre: string;
  description: string,
  views: number;
  new: boolean;
  ongoing: boolean;
  finished: boolean;
}
