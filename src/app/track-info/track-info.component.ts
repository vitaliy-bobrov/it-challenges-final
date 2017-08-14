import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'it-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackInfoComponent {
  @Input() name: string;
  @Input() artist: string;

  constructor() {}
}
