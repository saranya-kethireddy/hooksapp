
import './App.css';
import DataFetching from './components/useeffecthooks/DataFetching';
import ComponentA from './components/contexthooks/ComponentA';
import React from 'react';

export const UserContext = React.createContext()
export const BatchContext = React.createContext()


function App() {
  return (
    <div className="App">


      <UserContext.Provider value={'saranya'} >
        <BatchContext.Provider value={'dxc batch2'}>

          <ComponentA />
        </BatchContext.Provider>

      </UserContext.Provider>


    </div>
  );
}

export default App;
