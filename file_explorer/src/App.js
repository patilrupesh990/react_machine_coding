import { useState } from 'react';
import './App.css';
import fileData from './FileExplorer.json'
import List from './components/list/ListStructure';


function App() {
  const [data, setData] = useState(fileData)

  const addNewFolder = (id) =>{
    const name = prompt("Enter Folder Name!")
    const updateFileData = (fileData) =>{
      
      return fileData.map((element) =>{
        
        if(element.id === id){
          return{
            ...element,
            children:[
              {name,isFolder:true,children:[],id:`${name}_new_folder_${id}`},
              ...element.children,
            ]
          }
        }                
        if(element?.isFolder){
           return {...element,children:updateFileData(element?.children)}
        }
        return element
      })
    }
    let updatedFileData = updateFileData(data);    
    console.log(updatedFileData);
    
    setData(updatedFileData);
  }
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List 
        fileData = {data} 
        addNewFolder = {addNewFolder}
      />
    </div>
  );
}

export default App;
