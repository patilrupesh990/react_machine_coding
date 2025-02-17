import { useState } from 'react';
import './App.css';
import fileData from './FileExplorer.json'
import List from './components/list/List';


function App() {
  const [data, setData] = useState(fileData)
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List fileData = {data} />
    </div>
  );
}

export default App;
