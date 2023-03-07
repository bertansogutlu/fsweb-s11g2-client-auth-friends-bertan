import './App.css';
import Login from './components.js/Login';
import Friendslist from './components.js/Friendslist';
import Addfriends from './components.js/Addfriends';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Client Auth Projesi: Friends</h1>
      </div>
      <div>
        <Login />
        <Friendslist />
        <Addfriends />
      </div>
    </div>
  );
}

export default App;
