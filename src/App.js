import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import BattlePage from './pages/BattlePage/BattlePage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/battle" render={(props) => {
          return <BattlePage {...props}/>
        }}/>
        <Route path="/home" render={(props) => {
          return <LandingPage {...props}/>
        }}/>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
