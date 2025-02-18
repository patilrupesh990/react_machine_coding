import { useState } from 'react'
import './List.css'
const List = (props) =>{
    const [isExpand,setIsExpand] = useState({})
    const {fileData, addNewFolder, addNewFile, deleteElement} = props;
    return(
        <div>
            {
                <div className="container">
                    {fileData.map((element) =>(
                        <div key={element.id}>
                        <div className='main' onClick={()=>setIsExpand((prev) => ({...prev,[element.name]:!prev[element.name]}) )}>
                                {element?.isFolder && <span >{!isExpand[element?.name]?"+":"-"}</span>}
                                {element?.isFolder && <span><img className='folder-icon' src="https://cdn-icons-png.flaticon.com/512/5994/5994754.png" alt="folder icon"/></span>}
                                {!element?.isFolder && <span><img className='file-icon' src="https://img.freepik.com/premium-vector/outline-document-file-icon_791764-476.jpg" alt="file icon"/></span>}
                                {element?.name}
                                {element?.isFolder && <span onClick={(e) =>{e.stopPropagation(); addNewFolder(element?.id)}}><img className='add-folder-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpviLdlVuxBlMNITJcW71wIdAysjBOxz6jjA&s' alt='add folder'/></span>}
                                {element?.isFolder && <span onClick={(e) => {e.stopPropagation(); addNewFile(element?.id)}}><img className='add-file-icon' src='https://cdn-icons-png.flaticon.com/512/1091/1091916.png' alt='add file'/></span>}
                                <span onClick={(e) => {e.stopPropagation(); deleteElement(element?.id) }}> <img className='add-file-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgCtB72sd2csn3h4Xoktuuub7vFQQ-dGBOw&s' alt='delete file'/> </span>
                        </div>
                        {isExpand[element?.name] && element?.isFolder && element?.children.length>0 && 
                            <List fileData = {element?.children} addNewFolder={addNewFolder} deleteElement={deleteElement} addNewFile={addNewFile}/>
                        }
                        </div>
                    ))}
                </div>

            }
        </div>
    )
}
export default List