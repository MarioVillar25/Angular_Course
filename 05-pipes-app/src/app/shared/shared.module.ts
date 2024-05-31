import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';




@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
