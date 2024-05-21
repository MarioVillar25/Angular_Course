export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia",
  price: 23,
};

//Destructuring phone:

const { description, price } = phone;

console.log("description:", description);
console.log("price:", price);

//------------------------------------

const tablet: Product = {
  description: "Ipad",
  price: 433,
};

//Destructuring tablet:

const { description: descTablet, price: priceTablet } = tablet;
console.log("description:", descTablet);
console.log("price:", priceTablet);

//-----------

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
  const { tax, products } = options;

  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//Destructuring ShoppingCart:

const [tlf, ipad] = shoppingCart;

console.log("phone:", tlf);
console.log("tablet:", ipad);

//-----------------------------------------------------

const result = taxCalculation({
  tax: tax,
  products: shoppingCart,
});
