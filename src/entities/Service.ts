import { LangString } from "./LangString";

class Service {
  name: LangString;
  price: number;
  description: LangString;

  constructor(name: LangString, price: number, description: LangString) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export { Service };
