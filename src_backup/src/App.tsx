import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { GlobalStyle } from './Global.styles';
import { Details } from './Components/Details/Details'

function App() {

  

  return (

    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">  
          <Main />
        </Route>
        <Route exact path="/Details/:name">  
          <Details />
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
