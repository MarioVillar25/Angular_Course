import { Component } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamyc-page',
  templateUrl: './dinamyc-page.component.html',
  styles: ``,
})
export class DinamycPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death strundun', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {}

  //GETTER para favouriteGames

  get favGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  //Funciones para validaciones

  isValidFieldInArray(FormArray: FormArray, i: number) {
    return FormArray.controls[i].errors && FormArray.controls[i].touched;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;

    console.log(this.newFavorite.value);

    const newGame = this.newFavorite.value;

    this.favGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(i: number): void {
    this.favGames.removeAt(i);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset();
  }
}
