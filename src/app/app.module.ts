import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player.service';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { TrackInfoComponent } from './track-info/track-info.component';
import { TrackTimeComponent } from './track-time/track-time.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CircleProgressComponent,
    TrackInfoComponent,
    TrackTimeComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
