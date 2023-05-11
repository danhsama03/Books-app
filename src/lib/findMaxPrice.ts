import { Book } from "../data/books";
import { addElement } from "./utils";

/**
 * Hàm trả về id của sách có giá bán cao nhất
 * @param books Mảng các quyển sách
 * @returns Tên quyển sách có giá cao nhất
 */
const findMaxPrice = (books: Book[]): number[] => {
  // Nếu mảng sách rỗng thì không cần tìm và trả về mảng rỗng
  if (books.length == 0)
    return [];

  let ids: number[] = []; // Mảng lưu các id của các quyển sách có giá cao nhất
  let maxPrice = books[0].price; // Giá cao nhất hiện tại

  for (let i: number = 0; i < books.length; i++) {
    if (books[i].price > maxPrice) { // Có một quyển sách có giá lớn hơn maxPrice
      maxPrice = books[i].price; // Cập nhật maxPrice bằng giá mới nhất

      // Bỏ đi các kết quả đã có trước đó và khởi tạo lại mảng ids mới
      ids = [];
      addElement<number>(ids, i);
    }
    else if (books[i].price == maxPrice) { // Có một quyển sách có giá bằng với giá lớn nhất
      // Thêm quyển sách đó vào mảng ids
      addElement<number>(ids, i);
    }
  } 

  return ids;
};

export { findMaxPrice };
