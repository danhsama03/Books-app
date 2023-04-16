import { question } from "readline-sync";

const isValid = (books: any): boolean => {
    let boolean: boolean = false;
    for (let i: number = 0; i < books.length; i++) {
        if (books[i]['price'] == 0) {
            boolean = false;
            break;
        } else {
            boolean = true;
        };
        if (books[i]['name'] == '') {
            boolean = false;
            break;
        } else {
            boolean = true;
        };
    };
    if (boolean == true) {
        console.log("Mang hop le")
    } else {
        console.log("Mang khong hop le")
    };
    return boolean;
}


export {
    isValid
};