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
};

main();
export {};