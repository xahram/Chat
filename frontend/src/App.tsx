import React from 'react';
import './App.css';
// import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout'
import Profile from "./components/Profile/Profile"
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
