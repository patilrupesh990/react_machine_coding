import { useState } from 'react'
import './List.css'
const List = (props) =>{
    const [isExpand,setIsExpand] = useState({})
    return(
        <div>
            {
                <div className="container">
                    {props.fileData.map((element) =>(
                        <div key={element.id}>
                        <div className='main' onClick={()=>setIsExpand((prev) => ({...prev,[element.name]:!prev[element.name]}) )}>
                                {element?.isFolder && <span >{!isExpand[element?.name]?"+":"-"}</span>}
                                {element?.isFolder && <span><img className='folder-icon' src="https://cdn-icons-png.flaticon.com/512/5994/5994754.png" alt="folder icon"/></span>}
                                {!element?.isFolder && <span><img className='file-icon' src="https://img.freepik.com/premium-vector/outline-document-file-icon_791764-476.jpg" alt="file icon"/></span>}
                                {element?.name}
                                {element?.isFolder && <span onClick={(e) =>{e.stopPropagation(); props.addNewFolder(element?.id)}}><img className='add-folder-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpviLdlVuxBlMNITJcW71wIdAysjBOxz6jjA&s' alt='add folder'/></span>}
                        </div>
                        {isExpand[element?.name] && element?.isFolder && element?.children.length>0 && 
                            <List fileData = {element?.children} addNewFolder={props.addNewFolder}/>
                        }
                        </div>
                    ))}
                </div>

            }
        </div>
    )
}
export default List