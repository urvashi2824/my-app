import React, { useState } from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent =() =>{
    const [data, SetData]= useState(null);
    const HandleChild = (children) =>{
        SetData(children);
    }
  return (
    <div>
    <ChildComponent  onDataFromChild={HandleChild}/>
    <p>{data}</p>
    </div>
  )
}

export default ParentComponent
