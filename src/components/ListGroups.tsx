import React, { useState } from 'react'
//
interface Prop{
    items : []
}
const ListGroups = ({items} : Prop) => {
   
    
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1)

    if (items.length === 0) 
    return (<h1>There is no items</h1>);
    //It will be execution one return
    return (
        <>
            <div>
                <ul className="list-group list_group mx-5">
                    {items.map((item, index) =>
                        <li key={index} 
                        className={ selectedIndex === index ? "list-group-item list_item  active" :"list-group-item list_item " } 
                        
                        onClick={() => setSelectedIndex(index)}>
                            {item}
                        </li>
                    )}

                </ul>
            </div>
        </>

    )
}

export default ListGroups
