import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookSearch from './components/BookSearch'
import { Provider } from 'react-redux';
import store from '../src/store'
import BookShelf from './components/BookShelf';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookSearch/>
        <BookShelf/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const ProviderApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ProviderApp;
