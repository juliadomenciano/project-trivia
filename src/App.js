import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Play from './pages/Play';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/play" component={ Play } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    );
  }
}

export default App;
