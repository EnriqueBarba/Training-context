import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LogInForm from './components/LogInForm';

function App() {
  return (
    <div className="App">
      <div>WELCOME</div>
      
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LogInForm}/>
      </Switch>
    </div>
  );
}

export default App;
