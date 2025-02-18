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

  const addNewFile = (id) =>{
    const name = prompt("enter new file!");

    const updateFileData = (fileData) =>{
      return fileData.map((file)=>{
        if(file.id === id){
          return {
            ...file,
            children:[
              {name, id:`${name}_new_file`,isFolder:false},
              ...file.children
            ]
          }
        }
        if(file.isFolder){
          return {...file,children:updateFileData(file.children)}
        }
        return file;
      })
    }

    setData(updateFileData(data));

  }

  const deleteElement = (id) =>{    
    const deleteFileData = (fileData) =>{
      return fileData.filter((file) =>{
        if(file.id === id)
        {
          return false;
        }
        if(file.isFolder){         
            file.children = deleteFileData(file.children)
        }
        return true
      })      
    }
    setData(deleteFileData(data))

  }

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List 
        fileData = {data} 
        addNewFolder = {addNewFolder}
        addNewFile = {addNewFile}
        deleteElement = {deleteElement}
      />
    </div>
  );
}

export default App;
