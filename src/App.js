import logo from './logo.svg';
import './App.css';
import DataFetching from './components/useeffecthooks/DataFetching';
import ComponentA from './components/contexthooks/ComponentA';
import React from 'react';

export const UserContext = React.createContext()


function App() {
  return (
    <div className="App">


      <UserContext.Provider value={'saranya'} >
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
