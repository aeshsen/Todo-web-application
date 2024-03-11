import React, { useRef} from 'react'
import { GrAdd } from "react-icons/gr";

function Addtodo({newitem}) {


     const nameelement = useRef("");
     const dateelement = useRef("");
     const timeelement = useRef("");

   

   const handlebtn =(e) =>{
    e.preventDefault();
     const name = nameelement.current.value;
     const date = dateelement.current.value;
     const time = timeelement.current.value;

     nameelement.current.value = "";
     dateelement.current.value = "";
     timeelement.current.value = "";


      newitem(name,date,time);
     
   };

 
  return (
    <div className="container text-center mydiv ">
  <form className="row" onSubmit={handlebtn}>
    <div className="col-4">
     <input type="text" placeholder='Enter your Todo Task here' ref={nameelement} />
    </div>
    <div className="col-4">
     <input type="date"  ref={dateelement}/>
    </div>
    <div className="col-2">
     <input type="time" ref={timeelement} />
    </div>
    <div className="col-2">
    <button  className="btn btn-success"
    
    
    
    > <GrAdd></GrAdd> </button>
    </div>
  </form>
</div>
  )
}

export default Addtodo
