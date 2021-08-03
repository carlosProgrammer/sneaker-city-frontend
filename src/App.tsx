import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div className={'container'}>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact={true} component={Home}/>
          </Switch>
        </BrowserRouter>
        
      </div>

    </div>
  );
}

export default App;
