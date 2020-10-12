import * as React from 'react';
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
    const [totalItems, setTotalItems] = React.useState(0);

    window.onscroll = debounce(() => {
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const newIndex = startIndex+10
            console.log(newIndex)
            console.log(totalItems)
            if (newIndex < totalItems){
                setStartIndex(newIndex)
                console.log("load more")
            }
        }
      }, 100);

      React.useEffect(()=>{
        if (startIndex>0){
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${filterParams(selectedTitle, selectedAuthor, selectedLanguage)}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs&startIndex=${startIndex}&maxResults=10`)
            .then((response) => response.json())
            .then((json) => {
                setTotalItems(json.totalItems);
                if (json.items) {
                    setEmptybooks('')
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
            setTotalItems(json.totalItems);
            if (json.items) {   
                setEmptybooks('')
                dispatch(fetchBookSuccess(mapToBooks(json.items)))
            } else {
                setEmptybooks('Brak wyników')
            }
        });
    }}, [selectedTitle, selectedAuthor, selectedLanguage, startIndex, dispatch]);

  return (
      <>
      <Button 
        type ="primary" 
        onClick={handleButtonClick} 
        style={{ marginTop:'26px', marginBottom:'26px'}}>Szukaj</Button>
      { emptybooks.length === 0 ?
        <ul className="book__list">
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
                </ul> : <p>{emptybooks}</p>}
  </>
  );
};

export default BookShelf;