export interface GotTvShow {
  serial: string;
}

export interface GotSerial {
  id: number;
  name: string;
  url: string;
}

export interface GotApi {
  score: number;
  show: {
    id: number,
    name: string,
    url: string,
  }
}

export interface NewShow {
  image: {
    medium: string;
  }
  language: string;
  name: string;
  rating: {
    average: number
  }
}