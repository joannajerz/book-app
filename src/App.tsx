import React from 'react';
import './App.css';
import BookSearch from './components/BookSearch'
import { Provider } from 'react-redux';
import store from '../src/store'
import 'antd/dist/antd.css';
import BookShelf from './components/BookShelf';
import BookAuthorLanguageSearch from './components/BookAuthorLanguageSearch';


function App() {
  return (
    <div className="book">
      <h1 className="book__title">Google API book search</h1>
        <BookSearch/>
        <BookAuthorLanguageSearch/>
        <BookShelf/>
    </div>
  );
}
const ProviderApp: React.FC = () => (
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);

export default ProviderApp;
