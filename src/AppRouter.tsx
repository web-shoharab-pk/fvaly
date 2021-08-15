import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/help" exact component={Help} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
