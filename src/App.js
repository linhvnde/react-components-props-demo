import ReactPlayer from 'react-player';

import './App.css';

import Badge from './components/Badge';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <Navbar />
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

      <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <hr />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}

export default App;
