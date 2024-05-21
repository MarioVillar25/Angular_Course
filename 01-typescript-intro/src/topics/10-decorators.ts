function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "New";
    hello = "wolrd";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "abc";

  print() {
    console.log("jaja");
  }
}
