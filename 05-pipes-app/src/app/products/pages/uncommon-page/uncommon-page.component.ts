import { Component } from '@angular/core';
import { interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select

  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = ['Maria', 'Pedro', 'Fer', 'Natalia', ' Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Fernando',
    age: 26,
    address: 'Otawa',
  };


  //Async Pipe

  public myObservableTimer = interval(2000)
  .pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('tenemos data en la promesa.')
    }, 3500)

  })






}
