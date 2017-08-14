import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'it-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleProgressComponent {
  @Input() progress = 0;

  private dashArray = 187.144; // 2 * Pi * r.

  get calculatedProgress(): number {
    return this.dashArray * (1 - this.progress / 100);
  }

  constructor() { }
}
