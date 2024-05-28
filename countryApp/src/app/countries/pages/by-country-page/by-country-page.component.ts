import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  //Declaramos la variable para el array de countries
  public countries: Country[] = [];

  //Hacemos inyeccion de los servicios
  constructor(private countriesService: CountriesService) {}

  //hacemos la función en la que llamamos al observable

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
    .subscribe((countries) => {
      this.countries = countries;
    });

    console.log('country', term);
  }
}
