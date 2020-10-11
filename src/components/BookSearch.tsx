import * as React from 'react';
import 'antd/dist/antd.css';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { Book } from '../models/Book';
import selectTitle from '../actions/bookTitle.action';
import { useDispatch } from 'react-redux';



const { Option } = Select;
const BookSearch: React.FC = () => {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState<Book[]>([]);
  const dispatch = useDispatch()

  const searchCallback = React.useCallback((value) => {
    setFetching(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCh1MEAecm6_wXVqeRNCjFg4nBzmUTRQgs`)
      .then((response) => response.json())
      .then((json) => setOptions(json.items.map((element: any)=>{return{
            title: element.volumeInfo.title,
            id: element.id
        }
        })));
  }, []);
  const debouncedSearchCallback = debounce(searchCallback, 800);

  const handleProductChange = React.useCallback((books) => 
   dispatch(selectTitle(books.map((value: any) => ({
      value: value.label,
      id: value.key
    })))), []);


  return (
    <Select
      mode="multiple"
      labelInValue
      placeholder="Wpisz tytuł"
      notFoundContent={fetching ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={debouncedSearchCallback}
      onChange={handleProductChange}
      style={{ width: '200px' }}
    >
      {options.map((book) => (
        <Option key={book.id} value={book.title}> 
          {book.title}
        </Option>
      ))}
    </Select>
  );
};

export default BookSearch;
