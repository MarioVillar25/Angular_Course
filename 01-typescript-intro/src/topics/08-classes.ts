export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "sitio"
  ) {}
}

export class Hero {
  //public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName)
  }
}

const persona = new Person("tony", "stark", "nueva deli");

const ironman = new Hero("ironman", 45, "tony", persona);

console.log(ironman);
