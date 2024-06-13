import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'counter', route: 'counter' },
    { title: 'user-info', route: 'user-info' },
    { title: 'properties', route: 'properties' },
  ]);


/*   public menuItems: MenuItem[] = [
    { title: 'counter', route: 'counter' },
    { title: 'user-info', route: 'user-info' },
    { title: 'properties', route: 'properties' },
  ];
 */


}
