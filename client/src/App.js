import React from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router>
      {routes.map(route => {
        return (<Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component}
          history={history}
        />)
      })}
    </Router>
  );
}
export default App;
