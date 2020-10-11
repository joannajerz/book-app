import * as React from 'react';
import 'antd/dist/antd.css';
import { Book } from '../models/Book';
import { useSelector } from 'react-redux';
import selectBook from '../selectors/bookTitle.selector';
import { Card } from 'antd';
import BookDescription from './BookDescription';
import selectAuthor from '../selectors/bookAuthor.selector';



const { Meta } = Card;

const BookShelf: React.FC = () => {
    const selectedTitle = useSelector(selectBook);
    const [books, setBooks] =  React.useState<Book[]>([])
    const selectedAuthor = useSelector(selectAuthor);


    React.useEffect(() => {
        if (selectedTitle.length>2){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${selectedTitle}+inauthor:${selectedAuthor}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs`)
        .then((response) => response.json())
        .then((json) => setBooks(json.items.map((element: any)=>{return{
                title: element.volumeInfo.title,
                id: element.id,
                description: element.volumeInfo.description || "brak opisu",
                image: element.volumeInfo.imageLinks.thumbnail || "brak"
            }
            })));
    }}, [selectedTitle, selectedAuthor]);


  return (
      <ul>
    {books.map((book)=>(
    <li>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={book.title} src={book.image} />}
        >
            <Meta title={book.title} />
            <BookDescription book={book}></BookDescription>
        </Card>
    </li>))}
  </ul>
  );
};

export default BookShelf;