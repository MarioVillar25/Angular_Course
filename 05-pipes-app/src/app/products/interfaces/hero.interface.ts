export enum Color {
  red,
  black,
  blue,
  green,
  white,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
