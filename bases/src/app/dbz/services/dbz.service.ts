import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class dbzService {
  public characters: Character[] = [
    {
      id: v4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: v4(),
      name: 'Goku',
      power: 34545,
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 333,
    },
  ];

  //funciones para la mainPage para manejar el array

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: v4(),
      ...character,
    };

    this.characters.push(newCharacter);
  }
  onDeleteCharacterbyID(index: string): void {
    console.log({ index });

    this.characters = this.characters.filter(
      (character) => character.id !== index
    );
  }
}
