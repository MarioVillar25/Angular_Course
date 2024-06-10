import { Component } from '@angular/core';

interface menuItem {
  name:string;
  route:string;

}




@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: menuItem[] = [
    {name: 'FullScreen', route: '/maps/fullscreen'},
    {name: 'Zoom-Range', route: '/maps/zoom-range'},
    {name: 'Markers', route: '/maps/markers'},
    {name: 'Houses', route: '/maps/properties'}


  ]

}
