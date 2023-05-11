import { Book } from "../data/books";

/**
 * Hàm để lấy hàm kiểm tra mảng sách hợp lệ (tên sách khác rỗng, giá bán >=0)
 * @param books Mảng các quyển sách
 * @param dieuKien Điều kiện kiểm tra hợp lệ
 * @returns true nếu hợp lệ, ngược lại trả về false
 */
const getIsValidFunction = (): (books: Book[]) => boolean => {
  const condition = (book: Book)  => book.price > 0 && book.name != "";

  // Khai báo hàm để kiểm tra mảng hợp lệ hay không
  const isValid = (books: Book[]): boolean => {
    for(let i: number = 0; i < books.length; i++) {
      if(!condition(books[i]))  // Nếu vi phạm điều kiện thì trả về false
        return false; 
    }
    return true; // Nếu không có cuốn sách nào vi phạm điều kiện thì trả về true
  }
  
  return isValid; // Trả về hàm
}

export {getIsValidFunction}

