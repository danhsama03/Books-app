import { question } from "readline-sync";


function countBooksOfPublisher(books: any, publisher: string): number {
    let soLuongSachNXB: number = 0;
    let nhaXuatBan: string = question("Nhap ten nha xuat ban sach: ");
    for (let i: number = 0; i < books.length; i++) {
        if (nhaXuatBan == books[i]['provider']) {
            soLuongSachNXB++;
        };
    };
    console.log(nhaXuatBan + ", So luong " + soLuongSachNXB + " sach.")
    if (soLuongSachNXB == 0) {
      console.log("Khong tim thay sach, hay nhap lai");
    };
    return soLuongSachNXB;
}

function getAvaeragePrice(books: any): number {
  let TBCongGiaBan: number = 0;
  let tongGiaBan: number = 0
  for (let i: number = 0; i < books.length; i++) {
    tongGiaBan = tongGiaBan + books[i]['price'];
  };
  TBCongGiaBan = tongGiaBan / books.length;
  console.log("Trung binh cong gia ban: " + TBCongGiaBan + " dong.");
  return TBCongGiaBan;
}    

function findMaxPrice(books: any): number {
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

function isValid(books: any): boolean {
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

function filterByPrice(books: any, min: number, max: number): number[] {
  min = Number(question("Nhap gia tien nho nhat: "));
  max = Number(question("Nhap gia tien lon nhat: "));
  let z: number = 0;
  let books2 : number[] = [];
  for (let i: number = 0; i < books.length; i++) {
    if (min <= books[i]['price'] && max >= books[i]['price']) {
      books2[z] = books[i];
      z++;
    };
  };
  console.log(books2);
  return books2;
}

function searchByName(books: any, keyword: string): number[] {
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

function main(): void {
    let publisher: string = "";
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
    countBooksOfPublisher(books, publisher);
    getAvaeragePrice(books);
    findMaxPrice(books);
    isValid(books);
    let min: number = 0;
    let max: number = 0;
    filterByPrice(books, min, max)
    let keyword: string = '';
    searchByName(books, keyword);
};

main();
export {};