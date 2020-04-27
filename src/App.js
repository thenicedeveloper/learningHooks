import React, {useState, useEffect} from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  let handleInputChange = (e) => {
    e.preventDefault()
    console.log('userQuery', searchQuery)
    setSearchQuery(e.target.value)
  }

  let handleKeyPress = (e) => {
    if(e.key  === 'Enter'){
      handleSearch()
    }
  }

  let handleSearch = () => {
    window.open(`https://google.com/search?q=${searchQuery}`, '__blank')
  }


  return (
    <div className="App">
      <form className="form">
        <input value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
        <button onClick={handleSearch}>Search</button>
      </form>

      <hr/>
      <Joke />
      <hr/>

      <Tasks />

      <hr/>
      <Stories />
    </div>
  );
}

export default App;
