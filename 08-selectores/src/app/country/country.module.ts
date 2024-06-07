import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SelectorPageComponent
  ],
})
export class CountryModule { }
