import * as React from 'react';
import 'antd/dist/antd.css';
import{ selectAuthor,  selectLanguage} from '../actions/bookFilter.action';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { Radio } from 'antd';




const BookAuthorLanguageSearch: React.FC = () => {
  const dispatch = useDispatch()

  const searchCallback = React.useCallback((e) => { dispatch(selectAuthor(e.target.value))
  }, [dispatch]);
  const languageCallback = React.useCallback((e) => { dispatch(selectLanguage(e.target.value))}
  , [dispatch]);


  return (
      <>
    <Input
    placeholder="wpisz autora ksiązki"
    size="large"
    onChange={searchCallback}
    style={{    margin: '0px 0px 26px 30px', maxWidth:'700px'
    }}
  />
  <p className="book__input-language">Wybierz język</p>
    <Radio.Group defaultValue="en" buttonStyle="solid" onChange={languageCallback}>
    <Radio.Button value="en">Angielski</Radio.Button>
    <Radio.Button value="pl">Polski</Radio.Button>
    <Radio.Button value="fr">Francuski</Radio.Button>
  </Radio.Group>
  </>
  );
};

export default BookAuthorLanguageSearch;