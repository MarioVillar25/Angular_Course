import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: number[] = [1, 2, 3, 4, 5, 6];
  public deletedHero?: number;

  removeHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
