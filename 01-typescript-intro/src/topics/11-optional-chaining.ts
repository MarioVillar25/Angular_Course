export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Melisa",
};

const passenger2: Passenger = {
  name: "Melisa",
  children: ["y", "tu"],
};

const returnChildren = (passenger: Passenger): number => {
  const howMany = passenger.children?.length || 0;

  //const howMany = passenger.children!.length;
  //la "!" va asegurar que esa propiedad SIEMPRE va a devolver algo y NUNCA será null.

  return howMany;
};

returnChildren(passenger1);
