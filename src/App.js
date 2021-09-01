import './App.css';
import Header from './component/Header';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './component/Customer';
import Item from './component/Item';


function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={Customer} /> */}
        <Route path="/customer" component={Customer} />
        <Route path="/item" component={Item} />
        {/* <Route path="/order" component={SignIn} /> */}
        {/* <Route path="/login" component={SignUp} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
