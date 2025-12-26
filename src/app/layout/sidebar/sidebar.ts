import { Component } from '@angular/core';
import { SidebarItem } from './models/sidebar.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: SidebarItem[] = [
    { id: 1, label: 'Home', icon: '🏠', route: '/home' },
    { id: 2, label: 'Groups', icon: '👥', route: '/groups' },
    { id: 3, label: 'Activity', icon: '📊', route: '/activity' },
    { id: 4, label: 'Account', icon: '⚙️', route: '/account' },
  ];
}
