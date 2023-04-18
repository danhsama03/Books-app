import { question } from "readline-sync";
import {
  countBooksOfPublisher,
  getAvaeragePrice,
  findMaxPrice,
  isValid,
  filterByPrice,
  searchByName
} from "./module";

const books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuoi tre",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuoi tre",
  },
];

function main(): void {
  let publisher: string = "";
  let min: number = 0;
  let max: number = 0;
  let keyword: string = '';
  countBooksOfPublisher(books, publisher);
  getAvaeragePrice(books);
  findMaxPrice(books);
  isValid(books);
  filterByPrice(books, min, max)
  searchByName(books, keyword);
};

main();
export { };