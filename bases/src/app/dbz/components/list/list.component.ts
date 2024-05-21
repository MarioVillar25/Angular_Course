import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  //PREGUNTAR DUDA PABLO SOBRE EL ORDEN

  //creamos el output y un emisor de evento para el indice.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string | undefined): void {
    console.log({ index });

    this.onDelete.emit(index);
  }
}
