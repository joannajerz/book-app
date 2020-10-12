import * as React from 'react';
import 'antd/dist/antd.css';
import {selectTitle} from '../actions/bookFilter.action';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

const BookSearch: React.FC = () => {
  const dispatch = useDispatch()
  const searchCallback = React.useCallback((e) => { dispatch(selectTitle(e.target.value))
  }, [dispatch]);

  return (
    <Input
    placeholder="wpisz tytuł ksiązki"
    size="large"
    onChange={searchCallback}
    style={{    margin: '100px 0px 26px 30px', maxWidth:'700px'
    }}
  />
  );
};

export default BookSearch;
