import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

//ggg

@NgModule({
  declarations:[
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})

export class CounterModule{}
