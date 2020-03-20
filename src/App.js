import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Profile from './components/profile/Profile';
import Introduce from './components/introduce/Introduce';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/">
        <div className="App">
          <div className="grid col-pc-1-5"><Profile /></div>
          <div className="grid col-pc-5-5">
            <div className="introduce">
              <Introduce />

            </div>
          </div>
        </div>
      </Route>
    </Router>

  );
}

export default App;
