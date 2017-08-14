import { SafeResourceUrl } from '@angular/platform-browser';

export interface Track {
  path: string;
  bg: string;
  artist: string;
  name: string;
}

export type PlayList = Track[];
