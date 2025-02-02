import './App.css';
import Login from './components.js/Login';
import Friendslist from './components.js/Friendslist';
import Addfriends from './components.js/Addfriends';
import Header from './components.js/Header';
import Logout from './components.js/Logout';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/friendslist">
          <Friendslist />
        </Route>
        <Route exact path="/addfriends">
          <Addfriends />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
