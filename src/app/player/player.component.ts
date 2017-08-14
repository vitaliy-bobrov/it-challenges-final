import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

import { PlayerService } from '../player.service';
import { PlayList, Track } from './playlist.interface';

function findAngle(p0, p1, c) {
  const p0c = Math.sqrt(Math.pow(c.x - p0.x, 2) +
    Math.pow(c.y - p0.y, 2));
  const p1c = Math.sqrt(Math.pow(c.x - p1.x, 2) +
    Math.pow(c.y - p1.y, 2));
  const p0p1 = Math.sqrt(Math.pow(p1.x - p0.x, 2) +
    Math.pow(p1.y - p0.y, 2));

  return Math.acos((p1c * p1c + p0c * p0c - p0p1 * p0p1) / (2 * p1c * p0c));
}


@Component({
  selector: 'it-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  playlist: PlayList;
  current: Track;
  time$: Observable<number>;
  progress$: Observable<number>;
  state: 'play' | 'pause' = 'pause';
  showPlaylist: boolean;

  private playback;

  constructor(private service: PlayerService) {}

  ngOnInit() {
    this.playlist = this.service.getPlayLisit();
    this.current = this.service.getTrack();

    this.playback = new Audio(this.current.path);
    this.onPlaybakcChange();
  }

  onPlayPause() {
    if (this.state === 'play') {
      this.playback.pause();
      this.state = 'pause';
    } else {
      this.playback.play();
      this.state = 'play';
    }
  }

  onNext() {
    this.destroyPlayback();

    this.current = this.service.getNextTrack(this.current.path);
    this.playback = new Audio(this.current.path);

    this.onPlaybakcChange();
  }

  onPrev() {
    this.destroyPlayback();

    this.current = this.service.getPrevTrack(this.current.path);
    this.playback = new Audio(this.current.path);

    this.onPlaybakcChange();
  }

  onMenuClick() {
    this.showPlaylist = true;
  }

  onCloseClick() {
    this.showPlaylist = false;
  }

  onTrackClick(path: string) {
    this.destroyPlayback();

    this.current = this.service.getTrack(path);
    this.playback = new Audio(this.current.path);
    this.showPlaylist = false;

    this.onPlaybakcChange();
  }
  // @TODO: Fix calculations.
  onProgressClick(event) {
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const r = event.path[0].getBoundingClientRect().width / 2;
    const p1 = {
      x: r,
      y: 0
    };
    const p2 = {x, y};
    const c = {
      x: r,
      y: r
    };
    const angle = findAngle(p1, p2, c);
    const percent = (angle * 100) / 360;

    this.playback.currentTime = this.playback.duration * percent;
  }

  private destroyPlayback() {
    this.playback.pause();
    this.playback.src = null;
    this.playback.load();
  }

  private onPlaybakcChange() {
    this.time$ = Observable.fromEvent(this.playback, 'timeupdate')
      .map((event: any) => event.path[0].currentTime);

    this.progress$ = Observable.fromEvent(this.playback, 'timeupdate')
      .map((event: any) => {
        const track = event.path[0];

        return track.currentTime * 100 / track.duration;
      });

    this.playback.pause();

    if (this.state === 'play') {
      this.playback.play();
    }
  }
}
