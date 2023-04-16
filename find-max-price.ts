import { question } from "readline-sync";

const findMaxPrice = (books: any): number => {
    let id: number = 0;
    let giaBanCaoNhat: number = 0
    for (let i: number = 0; i < books.length; i++) {
        if (giaBanCaoNhat < books[i]['price']) {
            giaBanCaoNhat = books[i]['price'];
            id = books[i]['id'];
        };
    };
    console.log("ID cua sach co gia cao nhat: " + id);
    return id;
}


export {
    findMaxPrice
};