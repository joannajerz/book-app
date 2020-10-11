
export interface Book {
    title: string,
    id: string;
    description: string,
    image: string
}
export interface BookState {
    books: Book[]
  }