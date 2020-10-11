import * as React from 'react';
import 'antd/dist/antd.css';
import selectTitle from '../actions/bookTitle.action';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
const { Search } = Input;

const BookSearch: React.FC = () => {
  const dispatch = useDispatch()
  const searchCallback = React.useCallback((value) => { dispatch(selectTitle(value))
  }, []);

  return (
    <Search
    placeholder="wpisz tytuł ksiązki"
    enterButton="Search"
    size="large"
    onSearch={searchCallback}
  />
  );
};

export default BookSearch;
