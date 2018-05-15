import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyC-DBEdueq9yrYLXGKH0VhM135k54GPuW8';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));