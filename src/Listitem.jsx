import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Listitem({lists, Delete}) {
  return (
     <div className="container text-center mydiv">
  <div className="row">
    <div className="col-4">
     <input type="text"  readOnly value={lists.taskname}/>
    </div>
    <div className="col-4">
     <input type="date" readOnly  value={lists.taskdate}/>
    </div>
    <div className="col-2">
     <input type="time" readOnly value={lists.tasktime} />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger"

    onClick={() => Delete(lists.taskname)}
    
    >  
    
    <MdDeleteForever></MdDeleteForever>
    
    
    
    </button>
    </div>
  </div>
</div> 

  )
}

export default Listitem
