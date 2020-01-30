import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import LogInForm from './components/LogInForm';
import { WithAuthConsumer } from './contexts/AuthContext';
import RegisterForm from './components/RegisterForm';

function App({currentUser,logout}) {
  return (
    <div className="App">
      <h4>WELCOME</h4>
      {currentUser &&
                <button onClick={logout} type="button">logout</button>
      }

      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LogInForm}/>
        <Route exact path="/register" component={RegisterForm} />
      </Switch>

      {!currentUser && 
        <div className="d-flex justify-content-around p-5">
          <Link className="mt-2 btn btn-primary" to="/login">LogIn</Link>
          <Link className="mt-2 btn btn-secondary" to="/register">Register</Link>
        </div>
      }
    </div>
  );
}

export default WithAuthConsumer(App);
