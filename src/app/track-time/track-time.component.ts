import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-track-time',
  templateUrl: './track-time.component.html',
  styleUrls: ['./track-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackTimeComponent {
  @Input() value: number;

  get time(): string {
    return this.value ? this.convertTime(this.value) : '00:00';
  }

  constructor() {}

  private convertTime(seconds): string {
    const sec = parseInt(seconds, 10);
    const minutes = Math.floor(sec / 60);
    const leftSeconds = sec % 60;

    return `${this.addLeadingZero(minutes)}:${this.addLeadingZero(leftSeconds)}`
  }

  private addLeadingZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
