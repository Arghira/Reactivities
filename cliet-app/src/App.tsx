import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
        <Header as='h2' icon='users' content='Reactivities'/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
