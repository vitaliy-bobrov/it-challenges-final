import { Injectable } from '@angular/core';

import { PlayList, Track } from './player/playlist.interface';

@Injectable()
export class PlayerService {
  list: PlayList;

  constructor() {
    this.list = [
      {
        path: '/assets/tracks/chopin-mazurka-in-d-major-b4.mp3',
        bg: 'url(/assets/bg/1.jpg)',
        artist: 'Frédéric Chopin',
        name: 'Mazurka in D major, B. 4'
      },
      {
        path: '/assets/tracks/chopin-mazurka-in-d-major-b71.mp3',
        bg: 'url(/assets/bg/2.jpg)',
        artist: 'Frédéric Chopin',
        name: 'Mazurka in D major, B. 71'
      },
      {
        path: '/assets/tracks/chopin-spring.mp3',
        bg: 'url(/assets/bg/3.jpg)',
        artist: 'Frédéric Chopin',
        name: 'Andantino \'Spring\', B. 117'
      },
      {
        path: '/assets/tracks/chopin-tarantelle-op43.mp3',
        bg: 'url(/assets/bg/4.jpg)',
        artist: 'Frédéric Chopin',
        name: 'Tarantelle, Op. 43'
      }
    ];
  }

  getPlayLisit(): PlayList {
    return this.list;
  }

  getTrack(path?: string): Track {
    return path ? this.list.filter(track => track.path === path)[0] : this.list[0];
  }

  getNextTrack(path: string) {
    const index = this.findIndexByPath(path) + 1;
    return index < this.list.length ? this.list[index] : this.list[0];
  }

  getPrevTrack(path: string) {
    const index = this.findIndexByPath(path) - 1;
    return index >= 0 ? this.list[index] : this.list[this.list.length - 1];
  }

  private findIndexByPath(path: string): number {
    return this.list.reduce((search, track, index) => {
      return track.path === path ? index : search;
    }, 0);
  }
}
