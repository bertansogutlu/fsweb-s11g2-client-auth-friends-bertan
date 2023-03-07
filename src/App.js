import './App.css';
import Login from './components.js/Login';
import Friendslist from './components.js/Friendslist';
import Addfriends from './components.js/Addfriends';
import Header from './components.js/Header';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Login />
        <Friendslist />
        <Addfriends />
      </div>
    </div>
  );
}

export default App;
