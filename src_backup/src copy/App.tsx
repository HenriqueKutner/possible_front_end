import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { GlobalStyle } from './Global.styles';
import { Details } from './Components/Details/Details'

function App() {

  const [theme, setTheme] = useState<string>(() => {
      const localData = localStorage.getItem('theme');
      return localData ? JSON.parse(localData) : [];
  })

   useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  },[theme])

  if(theme){console.log(theme)}

  return (

    <Router>
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme}/>
      <Switch>
        <Route exact path="/">  
          <Main theme={theme}/>
        </Route>
        <Route exact path="/Details/:name">  
          <Details theme={theme}/>
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
