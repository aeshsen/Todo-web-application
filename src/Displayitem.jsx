import React from 'react'
import Listitem from './Listitem'

function Displayitem({items , Deltebtn }) {
  return (
    <>
    
    {items.map(item => <Listitem lists ={item} Delete ={Deltebtn} ></Listitem> )}

   
    
    </>
  )
}

export default Displayitem
