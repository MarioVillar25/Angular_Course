import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {


//metemos en el constructor el servicio de gifs
  constructor ( private gifsService: GifsService) {}


  get tags(){
    return this.gifsService.tagsHistory
  }


  searchTag(tag: string): void {

    this.gifsService.searchTag(tag);

  }









}
