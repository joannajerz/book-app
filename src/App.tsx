import React from 'react';
import './App.css';
import BookSearch from './components/BookSearch'
import { Provider } from 'react-redux';
import store from '../src/store'
import BookShelf from './components/BookShelf';


function App() {
  return (
    <div className="App">
        <BookSearch/>
        <BookShelf/>
    </div>
  );
}
const ProviderApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ProviderApp;
