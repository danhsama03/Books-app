import { question } from "readline-sync";

const filterByPrice = (books: any, min: number, max: number): number[] => {
    min = Number(question("Nhap gia tien nho nhat: "));
    max = Number(question("Nhap gia tien lon nhat: "));
    let z: number = 0;
    let books2: number[] = [];
    for (let i: number = 0; i < books.length; i++) {
        if (min <= books[i]['price'] && max >= books[i]['price']) {
            books2[z] = books[i];
            z++;
        };
    };
    console.log(books2);
    return books2;
}

export {
    filterByPrice
};