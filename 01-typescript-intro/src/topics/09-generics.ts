export function whatsMyType<T>(argument: T): T {
  return argument;
}

const ImString = whatsMyType<string>("jaja");
const ImNumber = whatsMyType<number>(34);
const ImArray = whatsMyType<number[]>([1, 2, 4, 5]);

console.log(ImString.split(" "));
console.log(ImNumber.toFixed());
console.log(ImArray.join("-"));
