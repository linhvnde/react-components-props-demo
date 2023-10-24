// import ReactPlayer from 'react-player';

import './App.css';

import Badge from './components/Badge';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';
import Message from './components/Message';
import ClickHandler from './components/ClickHandler';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import MoviesList from './components/MoviesList';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState('Light');
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false); 
  
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() !== '') {
      // Checks if name is not empty or just whitespace
      setShowName(true);
    } else {
      alert('Please enter a name');
    }
  } 
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <select onChange={(event) => setTheme(event.target.value)}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <form>
        <label>Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      {/* Checks the condition if showName is  
      true, which will be true only if  
      we click on the submit button */}
      {showName === true && <p>You have submitted. Name: {name}</p>}
      <Greeting name="Harper" />
      <Greeting name="Jan" />
      <Greeting name="K" />
      <Badge badgeText="important" />

      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: 'BCN', course: 'WEB' }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: 'MIA', course: 'DATA' }}
        />
      </StudentList>

      {/* <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <hr />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        // playing
        controls
        volume="0.5"
      /> */}

      <Message />
      <hr />
      <ClickHandler />

      <br />
      <ParentComponent />
      <br />
      <Counter />
      <br />
      <MoviesList />
    </div>
  );
}

export default App;
