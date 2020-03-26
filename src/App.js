import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import { AuthProvider } from './auth/auth';
import PrivateRoute from './auth/PrivateRoute';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
