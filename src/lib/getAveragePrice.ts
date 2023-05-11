import { Book } from "../data/books";

/**
 * Hàm tính trung bình cộng giá của các quyển sách
 * @param books Mảng các quyển sách
 * @returns Giá trung bình
 */
const getAveragePrice = (books: Book[]): number => {
  let sum: number = 0;
  const len: number = books.length; // Lưu trữ độ dài của mảng books để tránh tính toán lại trong vòng lặp

  // Tính tổng giá sách
  for(let i: number = 0; i < len; i++) {
    sum += books[i].price;
  }

  const average: number = sum / len; // Tính trung bình cộng price
  return average;
}

export { getAveragePrice };
