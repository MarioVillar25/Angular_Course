import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //delay(1000),

        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe((hero) => {
        //Si el id del hero no existe te devuelte al heroes/list
        if (!hero) return this.router.navigate(['/heroes/list']);

        console.log({ hero });

        return (this.hero = hero);
      });
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
