import { Book } from "../data/books";
import { addElement } from "./utils";

const filterByPrice = (books: Book[], min: number, max: number): Book[] => {
  let arr: Book[] = [];

  for (let i: number = 0; i < books.length; i++) {
    const price = books[i].price;
    if (price >= min && price <= max) {
      addElement<Book>(arr, books[i]);
    }
  }

  return arr;
};

export { filterByPrice };
