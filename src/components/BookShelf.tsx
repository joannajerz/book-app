import * as React from 'react';
import 'antd/dist/antd.css';
import { Book } from '../models/Book';
import { useSelector } from 'react-redux';
import selectBook from '../selectors/bookTitle.selector';
import { Card, Button } from 'antd';
import BookDescription from './BookDescription';
import selectAuthor from '../selectors/bookAuthor.selector';
import selectLanguage from '../selectors/bookLanguage.selector'
import filterParams from './filterParams';



const { Meta } = Card;

const BookShelf: React.FC = () => {
    const selectedTitle = useSelector(selectBook);
    const [books, setBooks] =  React.useState<Book[]>([])
    const [emptybooks, setEmptybooks] = React.useState('')
    const selectedAuthor = useSelector(selectAuthor);
    const selectedLanguage = useSelector(selectLanguage)
    let startIndex = 0;
    let maxResults = 10;


    const handleButtonClick= React.useCallback(() => {
        if (selectedTitle.length>2 || selectedAuthor.length>2){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${filterParams(selectedTitle, selectedAuthor, selectedLanguage)}
        &key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs&startIndex=${startIndex}&maxResults=${maxResults}`)
        .then((response) => response.json())
        .then((json) => {if (json.totalItems !== 0) {   
                setEmptybooks('')
                setBooks(
                    json.items.map(
                        (element: any)=>{
                            let description = element.volumeInfo.description || "brak opisu"
                            let imageUrl = element.volumeInfo.imageLinks? element.volumeInfo.imageLinks.thumbnail : "https://i.ibb.co/vwY2Zhc/600px-No-image-available-svg.png"
                            return  {
                                title: element.volumeInfo.title,
                                id: element.id,
                                description: description,
                                image: imageUrl
                            }
                        }
            ))} else {
                setEmptybooks('Brak wyników')
            }});
    }}, [selectedTitle, selectedAuthor, selectedLanguage, maxResults, startIndex]);
    
    

  return (
      <>
      <Button onClick={handleButtonClick}>Szukaj</Button>
      { emptybooks.length === 0 ?
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
    </ul>: <p>{emptybooks}</p>}
    <Button>        >
          Pokaż więcej

        </Button>
  </>
  );
};

export default BookShelf;