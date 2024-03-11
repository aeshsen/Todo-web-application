import React, { useState } from 'react'
import { GrAdd } from "react-icons/gr";

function Addtodo({newitem}) {

     const [initaltext,setinitaltext] = useState("");
     const [initaldate,setinitaldate] = useState("");
     const [initaltime,setinitaltime] = useState("");

   const handletext =(event)=>{
    setinitaltext(event.target.value)
   }
   const handledate =(event)=>{
    setinitaldate(event.target.value)
   }
   const handletime =(event)=>{
    setinitaltime(event.target.value)
   }

   const handlebtn =() =>{
      newitem(initaltext,initaldate,initaltime);
      setinitaldate("");
      setinitaltext("");
      setinitaltime("");
   };

  



  return (
    <div className="container text-center mydiv ">
  <div className="row">
    <div className="col-4">
     <input type="text" onChange={handletext} placeholder='Enter your Todo Task here' value={initaltext} />
    </div>
    <div className="col-4">
     <input type="date" onChange={handledate} value={initaldate}/>
    </div>
    <div className="col-2">
     <input type="time" onChange={handletime}  value={initaltime}/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success"
    
     onClick={handlebtn}
    
    > <GrAdd></GrAdd> </button>
    </div>
  </div>
</div>
  )
}

export default Addtodo
