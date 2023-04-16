import { question } from "readline-sync";

const searchByName = (books: any, keyword: string): number[] => {
    let books3: number[] = [];
    let x: number = 0;
    keyword = question("Nhap tu khoa: ");
    for (let i: number = 0; i < books.length; i++) {
        for (let y: number = 0; y < books[i]['name'].length; y++) {
            if (keyword == books[i]['name'][y]) {
                books3[x] = books[i];
                x++;
            };
        };
    };
    console.log(books3);
    return books3;
}

export {
    searchByName
};