import * as React from 'react';
import { Book } from '../models/Book';
import { useSelector, useDispatch } from 'react-redux';
import selectBook from '../selectors/bookTitle.selector';
import { Card, Button } from 'antd';
import BookDescription from './BookDescription';
import selectAuthor from '../selectors/bookAuthor.selector';
import selectLanguage from '../selectors/bookLanguage.selector'
import bookLoad from '../selectors/book.selector'
import filterParams from './filterParams';
import mapToBooks from './maptoBooks';
import { fetchBookSuccess, fetchMoreBookSuccess } from '../actions/bookLoadMore';
import {debounce} from 'lodash';


const { Meta } = Card;

const BookShelf: React.FC = () => {
    const selectedTitle = useSelector(selectBook);
    const [emptybooks, setEmptybooks] = React.useState('');
    const selectedAuthor = useSelector(selectAuthor);
    const selectedLanguage = useSelector(selectLanguage);
    const bookLoaded = useSelector(bookLoad)
    const [startIndex, setStartIndex] = React.useState(0)
    const dispatch = useDispatch();
    
    window.onscroll = debounce(() => {
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("load more")
            setStartIndex(startIndex+10)
        }
      }, 100);

      React.useEffect(()=>{
        if (startIndex>0){
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${filterParams(selectedTitle, selectedAuthor, selectedLanguage)}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs&startIndex=${startIndex}&maxResults=10`)
            .then((response) => response.json())
            .then((json) => {
                if (json.totalItems !== 0) {
                    dispatch(fetchMoreBookSuccess(mapToBooks(json.items)))
                }
            });
        }
      }, [startIndex])

    const handleButtonClick = React.useCallback(() => {
        if (selectedTitle.length>2 || selectedAuthor.length>2){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${filterParams(selectedTitle, selectedAuthor, selectedLanguage)}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs&startIndex=${startIndex}&maxResults=10`)
        .then((response) => response.json())
        .then((json) => {
            if (json.totalItems !== 0) {   
                setEmptybooks('')
                dispatch(fetchBookSuccess(mapToBooks(json.items)))
            } else {
                setEmptybooks('Brak wyników')
            }
        });
    }}, [selectedTitle, selectedAuthor, selectedLanguage, startIndex, dispatch]);

  return (
      <>
      <Button type ="primary" onClick={handleButtonClick}>Szukaj</Button>
      { emptybooks.length === 0 ?
      <ul>
        {bookLoaded.map((book)=>(
        <li key={book.id} >
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={book.title} src={book.image}/>}
        >
            <Meta title={book.title} />
            <BookDescription book={book}></BookDescription>
        </Card>
    </li>))}
    </ul>: <p>{emptybooks}</p>}
  </>
  );
};

export default BookShelf;