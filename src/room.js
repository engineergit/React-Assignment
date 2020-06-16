import React,{useState} from 'react';
import './index.css'
function RoomNew (){
    const [isLit, setLit] = useState(true);
    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>The room is {isLit ? "lit" : "dark"}
        <br />
  <button onClick={()=>{setLit(!isLit)}}>
    Flip
  </button>
    </div>
);  
}
export default RoomNew;