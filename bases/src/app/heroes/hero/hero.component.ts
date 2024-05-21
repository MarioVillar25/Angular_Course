import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Parker Peter';
  public age: number = 45;

  get nameCapitalize(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(value: string): string {
    return (this.name = value);
  }

  changeAge(num: number): number {
    return (this.age = num);
  }

  reset(): void {
    this.name = 'Parker Peter';
    this.age = 45;
  }
}
