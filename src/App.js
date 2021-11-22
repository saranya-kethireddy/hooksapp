
import './App.css';

import React from 'react';
import CounterOne from './components/reducerhook/CounterOne';

export const UserContext = React.createContext()
export const BatchContext = React.createContext()


function App() {
  return (
    <div className="App">


     <CounterOne/>

    </div>
  );
}

export default App;
