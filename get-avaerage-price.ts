import { question } from "readline-sync";

const getAvaeragePrice = (books: any): number => {
    let TBCongGiaBan: number = 0;
    let tongGiaBan: number = 0
    for (let i: number = 0; i < books.length; i++) {
        tongGiaBan = tongGiaBan + books[i]['price'];
    };
    TBCongGiaBan = tongGiaBan / books.length;
    console.log("Trung binh cong gia ban: " + TBCongGiaBan + " dong.");
    return TBCongGiaBan;
}

export {
    getAvaeragePrice
};