import './List.css'
const List = (props) =>{

    return(
        <div>
            {
                <div className="container">
                    {props.fileData.map((element) =>(
                        <div >
                            {element.isFolder && <span>+</span>}
                            {element.isFolder && <span><img className='folder-icon' src="https://cdn-icons-png.flaticon.com/512/5994/5994754.png" alt="folder icon"/></span>}
                            {!element.isFolder && <span><img className='file-icon' src="https://img.freepik.com/premium-vector/outline-document-file-icon_791764-476.jpg" alt="file icon"/></span>}

                            {element.name}
                            {element.isFolder && element?.children.length>0 && 
                                <List fileData = {element?.children}/>
                            }
                        </div>
                    ))}
                </div>

            }
        </div>
    )
}
export default List