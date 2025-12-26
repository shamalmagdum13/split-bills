import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupList } from './features/groups/group-list/group-list';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'split-bills';
}
