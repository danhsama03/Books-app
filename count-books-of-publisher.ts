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

export {
  countBooksOfPublisher
};