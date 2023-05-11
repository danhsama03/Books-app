import { Book } from "../data/books";

function toLowerCase(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charCode = char.charCodeAt(0); 
        if (charCode >= 65 && charCode <= 90) {
            const lowercaseCharCode = charCode + 32;
            result += String.fromCharCode(lowercaseCharCode); 
        } else {
            result += char;
        }
    }
    return result;
}

const countBooksOfPublisher = (books: Book[], publisher: string = ""): number => {
    let soLuongSach: number = 0;
    const lowerCasePublisher = toLowerCase(publisher); 
    for(let i: number = 0; i < books.length; i++) {
        if(lowerCasePublisher === toLowerCase(books[i].provider)) { 
            soLuongSach += 1;
        }
    }
    return soLuongSach;
}

export {countBooksOfPublisher};
