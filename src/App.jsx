import { useState } from 'react'
import './App.css'
import Todoname from './Todoname'
import Addtodo from './Addtodo'
import "bootstrap/dist/css/bootstrap.min.css"
import Displayitem from './Displayitem'
import Welcomemessage from './Welcomemessage'


function App() {
  const [showval,setshowval] = useState([]);
  

  
  const handlebutton =(name,date,time) =>{
     

      if(name!=="" && date!=="" && time!==""){
        let newobj = [...showval , {taskname:name,taskdate:date,tasktime:time},];
        setshowval(newobj);

      }
      else{
        alert("all fields are mandatory ");
      }
      
  }
  const handledeletebtn =(itemname) =>{

     const newarr = showval.filter((item)=> item.taskname!==itemname);
     setshowval(newarr);

   }


  return (
    <>
     <Todoname></Todoname>
     <Addtodo newitem ={handlebutton}></Addtodo>
     {showval.length ===0 ? <Welcomemessage></Welcomemessage> : null }
     <Displayitem  items = {showval} Deltebtn ={handledeletebtn} > </Displayitem>
    </>
  )
}

export default App
