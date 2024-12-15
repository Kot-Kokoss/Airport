import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sharedImports } from './imports/imports';
import { WatchStatsComponent } from './watch-stats/watch-stats.component';
import { EditStatsComponent } from './edit-stats/edit-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ...sharedImports,
    WatchStatsComponent,
    EditStatsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Дашборд БД аэропорта';

  isEdit = false;
}
