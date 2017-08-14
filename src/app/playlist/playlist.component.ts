import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { PlayList } from '../player/playlist.interface';

@Component({
  selector: 'it-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent {
  @Input() playlist: PlayList;
  @Input() progress: number;

  @Output() close = new EventEmitter();
  @Output() track = new EventEmitter<string>();

  constructor() {}

  onCloseClick() {
    this.close.emit();
  }

  onTrackClick(path: string) {
    this.track.emit(path);
  }
}
