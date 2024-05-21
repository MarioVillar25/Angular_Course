import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    //Si no hay nada en el input que lo retorne
    if (this.character.name.length === 0) return;

  //sec crea el emisor para mandar al padre el character
    this.onNewCharacter.emit(this.character);

    console.log(this.character);

    //con esto reinicio el valor de name y power
    this.character = { name: '', power: 0 };
  }
}
