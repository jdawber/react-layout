import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import routes from "./configuration/routes.json";

import './App.css';
import PageOne from './pages/PageOne';

function App() {
  return (
      <div className="App">
      <HashRouter>
        <Route path="/asdada" component={PageOne}/>
        {
          routes.map((route, index) => {
            return (
              <Route path={route.path} component={route.component}/>
            )
          })
        }
      </HashRouter>   
    </div>
  );
}

export default App;
