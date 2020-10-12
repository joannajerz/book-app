import React from 'react';
import './App.css';
import BookSearch from './components/BookSearch'
import { Provider } from 'react-redux';
import store from '../src/store'
import 'antd/dist/antd.css';
import BookShelf from './components/BookShelf';
import BookAuthorSearch from './components/BookAuthorSearch';


function App() {
  return (
    <div className="App">
        <BookSearch/>
        <BookAuthorSearch/>
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
