import { question } from "readline-sync";

const countBooksOfPublisher = (books: any, publisher: string): number => {
    let soLuongSachNXB: number = 0;
    let nhaXuatBan: string = question("Nhap ten nha xuat ban sach: ");
    for (let i: number = 0; i < books.length; i++) {
        if (nhaXuatBan == books[i]['provider']) {
            soLuongSachNXB++;
        };
    };
    if (soLuongSachNXB == 0) {
        console.log("Khong tim thay sach, hay nhap lai");
    } else {
        console.log(nhaXuatBan + ", So luong " + soLuongSachNXB + " sach.")
    };
    return soLuongSachNXB;
};

const getAvaeragePrice = (books: any): number => {
    let TBCongGiaBan: number = 0;
    let tongGiaBan: number = 0
    for (let i: number = 0; i < books.length; i++) {
        tongGiaBan = tongGiaBan + books[i]['price'];
    };
    TBCongGiaBan = tongGiaBan / books.length;
    console.log("Trung binh cong gia ban: " + TBCongGiaBan + " dong.");
    return TBCongGiaBan;
};

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
};

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
};

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
};

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
};

export {
    countBooksOfPublisher,
    getAvaeragePrice,
    findMaxPrice,
    isValid,
    filterByPrice,
    searchByName
};