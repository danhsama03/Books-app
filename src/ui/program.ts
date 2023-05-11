import { question } from "readline-sync";
import chalk from "chalk"; 
import { Book, books } from "../data/books";
import { countBooksOfPublisher } from "../lib/countBooks";
import { getAveragePrice } from "../lib/getAveragePrice";
import { searchByName } from "../lib/searchByName";
import { filterByPrice } from "../lib/filterByPrice";
import {findMaxPrice} from "../lib/findMaxPrice";
import {getIsValidFunction} from "../lib/isValid";

const info = chalk.blueBright.bold;
const danger = chalk.redBright.italic.bold;
const highlight = chalk.bgBlueBright.bold;

function menu() {
  console.log(info("============= MinShop ============="));
  console.log("0. Dung chuong trinh.");
  console.log("1. So luong sach cua NXB.");
  console.log("2. Gia trung binh cua cac quyen sach.");
  console.log("3. ID sach co gia cao nhat.");
  console.log("4. Kiem tra thong tin sach hop le.");
  console.log("5. Loc theo gia.");
  console.log("6. Tim kiem sach.");
  console.log(info("============= Menu ==============="));
}

function input<Type extends number | string>(text: string, condition: (data: Type) => boolean): Type {
  let data: Type;
  let isValid: boolean = true;
  do {
    const str = question(info(text));
    data = str as Type;
    isValid = condition(data);
    if (!isValid)
      console.log(danger("Vui long nhap du lieu hop le!"));
  } while (!isValid);
  return data;
}

function run() {
  let choice: number = 0;
  
  do {
    menu();
    choice = Number(question(highlight('Chon chuc nang (Nhap so 0 de dung): ')));
    console.clear();
    switch (choice) {
      case 1:
        const publisher: string = input<string>(info("Nhap ten NXB: "), (data) => data != '');
        const numBooks = countBooksOfPublisher(books, publisher);
        console.log(info(`So luong sach cua nxb "${publisher.toUpperCase()}" la: ${numBooks}`));
        break;
      case 2:
        const averagePrice = getAveragePrice(books);
        console.log(info(`Gia trung binh cong: ${averagePrice}`));
        break;
      case 3:
        const ids = findMaxPrice(books);
        console.log(info(`id sach co gia ban cao nhat la: ${ids}`));
        break;
      case 4:
        const isValid = getIsValidFunction();
        if (isValid(books))
          console.log(info("Hop le."))
        else
          console.log(info("Khong hop le."))
        break;
      case 5:
        const minPrice: number = input<number>("Nhap gia nho nhat: ", (data) => data > 0);
        const maxPrice: number = input<number>("Nhap gia lon nhat: ", (data) => data > 0);
        const filteredBooks1: Book[] = filterByPrice(books, minPrice, maxPrice);
        console.log(info(`Sach co gia trong doan [${minPrice}, ${maxPrice}] la: `));
        console.log(filteredBooks1);
        break;
      case 6:
        const keyword: string = input<string>("Nhap tu khoa tim kiem: ", (data) => data != "");
        const filteredBooks2 = searchByName(books, keyword);
        console.log(info(`Sach co ten trung voi keyword la:`));
        console.log(filteredBooks2);
        break;
    }
  } while (choice !== 0);
  console.log(info("Cam on ban da su dung ung dung. Tam biet!"));
}

export {run};