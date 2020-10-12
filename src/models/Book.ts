export interface Book {
    title: string,
    id: string;
    description: string,
    image: string
};
export interface FiltersState {
    title: string,
    language: string,
    author: string
};
export interface BooksState {
   books: Book[]
};