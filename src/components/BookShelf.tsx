import * as React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { Book } from '../models/Book';
import { useSelector } from 'react-redux';
import selectBook from '../selectors/bookTitle.selector';



const { Option } = Select;
const BookShelf: React.FC = () => {
const selectedTitle = useSelector(selectBook);
  const [fetching, setFetching] = React.useState(false);
  const [books, setBooks] =  React.useState<Book[]>([])

  React.useEffect(() => {
    setFetching(true);
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
   <div>
    <p>{books.map(book=>book.title)}</p>
   </div>
  );
};

export default BookShelf;