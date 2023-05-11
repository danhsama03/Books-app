import { books, Book } from "../data/books";
import { addElement, countMatching, sort, toLowerCase } from "./utils";

function sortBooksByScore(books: Book[], scores: number[]): void {

}

/**
 * Hàm lấy ra quyển sách có tên giống 1 từ keyword cho trước
 * @param books Mảng các quyển sách
 * @param keyword Từ khóa dùng để tìm kiếm
 * @returns Mảng các quyển sách thỏa yêu cầu
 */
const searchByName = (books: Book[], keyword: string): Book[] => {
  keyword = toLowerCase(keyword);
  const filteredBooks: Book[] = []; // Mảng kết quả
  const scores: number[] = []; // Mảng lưu điểm của từng quyển sách trong filteredBooks
  // Với mỗi quyển sách trong mảng sách
  for (let book of books) {
    const bookName = toLowerCase(book.name); // Chuyển thành ký tự thường để tìm kiếm tốt hơn
    const score = countMatching(keyword, bookName); // Điểm là số lần mà có một từ trong keyword khớp một từ trong bookName
    // Nếu keywrod gần giống với bookName thì thêm phần tử vào mảng
    if (score > 0) {
      addElement<number>(scores, score);
      addElement<Book>(filteredBooks, book);
    }
  }
  // Sắp xếp kết quả theo thứ tự điểm từ cao đến thấp
  sort<number, Book>(scores, filteredBooks, (x, y) => x < y);
  
  return filteredBooks;
}

export { searchByName };
