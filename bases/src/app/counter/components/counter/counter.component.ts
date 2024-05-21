import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetBy()">reset</button>
    <button (click)="decreaseBy()">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  resetBy(): void {
    this.counter = 10;
  }
}
