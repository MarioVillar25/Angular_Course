import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface menuItem {
  name:string;
  route:string;

}




@Component({
  standalone:true,
  selector: 'app-side-menu',
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor(){}

  public menuItems: menuItem[] = [
    {name: 'FullScreen', route: '/maps/fullscreen'},
    {name: 'Zoom-Range', route: '/maps/zoom-range'},
    {name: 'Markers', route: '/maps/markers'},
    {name: 'Houses', route: '/maps/properties'},
    {name: 'Alone Page', route: '/alone'}



  ]

}
