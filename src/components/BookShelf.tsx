import * as React from 'react';
import 'antd/dist/antd.css';
import { Book } from '../models/Book';
import { useSelector } from 'react-redux';
import selectBook from '../selectors/bookTitle.selector';
import { Card } from 'antd';
import BookDescription from './BookDescription';



const { Meta } = Card;

const BookShelf: React.FC = () => {
    const selectedTitle = useSelector(selectBook);
    const [books, setBooks] =  React.useState<Book[]>([])

    React.useEffect(() => {
        if (selectedTitle.length>0){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${selectedTitle}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs`)
        .then((response) => response.json())
        .then((json) => setBooks(json.items.map((element: any)=>{return{
                title: element.volumeInfo.title,
                id: element.id,
                description: element.volumeInfo.description,
                image: element.volumeInfo.imageLinks.thumbnail
            }
            })));
    }}, [selectedTitle]);


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