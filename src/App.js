
import './App.css';

import React from 'react';
import CounterOne from './components/reducerhook/CounterOne';
import CounterTwo from './components/reducerhook/CounterTwo';

export const UserContext = React.createContext()
export const BatchContext = React.createContext()


function App() {
  return (
    <div className="App">


     <CounterTwo/>

    </div>
  );
}

export default App;
