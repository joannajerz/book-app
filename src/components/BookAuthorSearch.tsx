import * as React from 'react';
import 'antd/dist/antd.css';
import selectAuthor from '../actions/bookAuthor.action';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
const { Search } = Input;

const BookAuthorSearch: React.FC = () => {
  const dispatch = useDispatch()
  const searchCallback = React.useCallback((value) => { dispatch(selectAuthor(value))
  }, [dispatch]);

  return (
    <Search
    placeholder="wpisz autora ksiązki"
    size="large"
    onSearch={searchCallback}
  />
  );
};

export default BookAuthorSearch;